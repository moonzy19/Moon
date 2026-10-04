do $$
begin
  if to_regclass('public.hris_attendance_adjustments_v24') is not null then
    drop policy if exists attendance_adjustments_v24_read on public.hris_attendance_adjustments_v24;
    drop policy if exists attendance_adjustments_v24_write on public.hris_attendance_adjustments_v24;
    create policy attendance_adjustments_v24_read on public.hris_attendance_adjustments_v24 for select to authenticated using (hris_has_permission('attendance.read') or hris_has_permission('attendance.exception'));
    create policy attendance_adjustments_v24_write on public.hris_attendance_adjustments_v24 for all to authenticated using (hris_has_permission('attendance.write') or hris_has_permission('attendance.exception')) with check (hris_has_permission('attendance.write') or hris_has_permission('attendance.exception'));
  end if;
  if to_regclass('public.hris_attendance_calculations_v24') is not null then
    drop policy if exists attendance_calculations_v24_read on public.hris_attendance_calculations_v24;
    create policy attendance_calculations_v24_read on public.hris_attendance_calculations_v24 for select to authenticated using (hris_has_permission('attendance.read') or hris_has_permission('reports.attendance'));
  end if;
  if to_regclass('public.hris_holidays_v24') is not null then
    drop policy if exists holidays_v24_read on public.hris_holidays_v24;
    drop policy if exists holidays_v24_write on public.hris_holidays_v24;
    create policy holidays_v24_read on public.hris_holidays_v24 for select to authenticated using (hris_has_permission('attendance.read') or hris_has_permission('leave.read'));
    create policy holidays_v24_write on public.hris_holidays_v24 for all to authenticated using (hris_has_permission('attendance.write') or hris_has_permission('schedule.write')) with check (hris_has_permission('attendance.write') or hris_has_permission('schedule.write'));
  end if;
  if to_regclass('public.hris_payroll_statutory_rules') is not null then
    drop policy if exists statutory_rules_read on public.hris_payroll_statutory_rules;
    drop policy if exists statutory_rules_write on public.hris_payroll_statutory_rules;
    create policy statutory_rules_read on public.hris_payroll_statutory_rules for select to authenticated using (hris_has_permission('payroll.read'));
    create policy statutory_rules_write on public.hris_payroll_statutory_rules for all to authenticated using (hris_has_permission('payroll.write')) with check (hris_has_permission('payroll.write'));
  end if;
  if to_regclass('public.hris_payroll_statutory_snapshots') is not null then
    drop policy if exists statutory_snapshots_read on public.hris_payroll_statutory_snapshots;
    create policy statutory_snapshots_read on public.hris_payroll_statutory_snapshots for select to authenticated using (hris_has_permission('payroll.read'));
  end if;
  if to_regclass('public.hris_payroll_tax_reconciliations') is not null then
    drop policy if exists tax_reconciliation_read on public.hris_payroll_tax_reconciliations;
    drop policy if exists tax_reconciliation_write on public.hris_payroll_tax_reconciliations;
    create policy tax_reconciliation_read on public.hris_payroll_tax_reconciliations for select to authenticated using (hris_has_permission('payroll.read'));
    create policy tax_reconciliation_write on public.hris_payroll_tax_reconciliations for all to authenticated using (hris_has_permission('payroll.write')) with check (hris_has_permission('payroll.write'));
  end if;
  if to_regclass('public.hris_shift_assignments_v24') is not null then
    drop policy if exists shift_assignments_v24_read on public.hris_shift_assignments_v24;
    drop policy if exists shift_assignments_v24_write on public.hris_shift_assignments_v24;
    create policy shift_assignments_v24_read on public.hris_shift_assignments_v24 for select to authenticated using (hris_has_permission('schedule.read') or hris_has_permission('schedule.assign'));
    create policy shift_assignments_v24_write on public.hris_shift_assignments_v24 for all to authenticated using (hris_has_permission('schedule.assign') or hris_has_permission('schedule.write')) with check (hris_has_permission('schedule.assign') or hris_has_permission('schedule.write'));
  end if;
  if to_regclass('public.hris_shift_definitions') is not null then
    drop policy if exists shift_definitions_read on public.hris_shift_definitions;
    drop policy if exists shift_definitions_write on public.hris_shift_definitions;
    create policy shift_definitions_read on public.hris_shift_definitions for select to authenticated using (hris_has_permission('schedule.read'));
    create policy shift_definitions_write on public.hris_shift_definitions for all to authenticated using (hris_has_permission('schedule.write')) with check (hris_has_permission('schedule.write'));
  end if;
end $$;

revoke execute on function public.handle_new_auth_user() from authenticated;
revoke execute on function public.hris_audit_row() from authenticated;
revoke execute on function public.hris_audit_safe_row() from authenticated;
revoke execute on function public.hris_candidate_stage_history() from authenticated;
revoke execute on function public.hris_employee_change_history() from authenticated;
revoke execute on function public.hris_ess_notify_overtime_decision() from authenticated;
revoke execute on function public.hris_guard_payroll_lines() from authenticated;
revoke execute on function public.hris_log_payroll_event() from authenticated;
revoke execute on function public.hris_notify_leave_decision() from authenticated;
revoke execute on function public.hris_record_approval_history() from authenticated;
revoke execute on function public.hris_register_employee_registration_approval() from authenticated;
revoke execute on function public.hris_sync_employee_registration_approval() from authenticated;
revoke execute on function public.hris_sync_leave_balance() from authenticated;
revoke execute on function public.hris_v13_ess_request_trigger() from authenticated;
revoke execute on function public.hris_v13_notify_approval() from authenticated;
revoke execute on function public.hris_validate_leave_balance() from authenticated;
revoke execute on function public.moonhr_create_employee_profile() from authenticated;
revoke execute on function public.hris_notify(text,text,text,text,text) from authenticated;
