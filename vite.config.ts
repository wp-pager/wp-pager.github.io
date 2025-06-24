import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',

    plugins: [vue()],

    resolve: {
        alias: {
            '@': '/src',
        },
    },

    server: {
        port: 3000,
    },
})
