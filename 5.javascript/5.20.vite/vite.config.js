import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path";
export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@component': path.resolve(__dirname, './src/components'),
        }
    },
    server: {
        port: 3000
    }
})

// --> /Applications/Work/F8 Training/K21/5.javascript/5.20.vite