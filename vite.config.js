import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import VitePluginTerminal from 'vite-plugin-terminal'

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePluginTerminal({
//       console: 'terminal',
//       output: ['error', 'warn', 'info']
//     })
//   ],
//   server: {
//     open: true
//   }
// })
