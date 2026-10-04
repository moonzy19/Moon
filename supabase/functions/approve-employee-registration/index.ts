import { createClient } from "npm:@supabase/supabase-js@2.57.4";

type Decision = "Terima" | "Tolak";

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const publishableKey = Deno.env.get("SUPABASE_ANON_KEY");
  if (!supabaseUrl || !publishableKey) {
    return new Response(JSON.stringify({ error: "Supabase runtime belum dikonfigurasi." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const supabase = createClient(supabaseUrl, publishableKey, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: userData, error: userError } = await supabase.auth.getUser();
  const user = userData.user;

  if (userError || !user?.email) {
    return new Response(JSON.stringify({ error: "Session login tidak valid." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { data: hrUser, error: hrError } = await supabase
    .from("hris_users")
    .select("role,status")
    .ilike("email", user.email)
    .maybeSingle();

  if (hrError || !hrUser || hrUser.status !== "Aktif" ||
      !["Super Admin", "Admin", "HRD"].includes(hrUser.role)) {
    return new Response(JSON.stringify({ error: "Akses approval karyawan ditolak." }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: { employee_id?: string; decision?: Decision };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Payload JSON tidak valid." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const employeeId = String(body.employee_id || "").trim();
  const decision = body.decision;

  if (!employeeId || (decision !== "Terima" && decision !== "Tolak")) {
    return new Response(JSON.stringify({ error: "employee_id dan decision wajib valid." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { data: approval, error: approvalError } = await supabase
    .from("hris_approval_requests")
    .select("id")
    .eq("modul", "employee_registration")
    .eq("record_id", employeeId)
    .eq("status", "Menunggu")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (approvalError) {
    return new Response(JSON.stringify({ error: approvalError.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!approval?.id) {
    return new Response(JSON.stringify({ error: "Approval registrasi tidak ditemukan." }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { error: decideError } = await supabase.rpc("hris_decide_approval", {
    p_id: approval.id,
    p_status: decision === "Terima" ? "Disetujui" : "Ditolak",
    p_catatan: null,
  });

  if (decideError) {
    return new Response(JSON.stringify({ error: decideError.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({
    ok: true,
    employee_id: employeeId,
    decision,
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
