import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  const adminDashboardSource = './src/components/admin/dashboard/DashboardAdmin.tsx'

  return {
    plugins: [react()],

    resolve: {
      alias: {
        '@project-admin-dashboard': fileURLToPath(
          new URL(adminDashboardSource, import.meta.url)
        ),
      },
    },
  }
})
