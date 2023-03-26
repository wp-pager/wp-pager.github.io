/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,vue}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },

        extend: {
            backgroundImage: {
                hero: "url('/src/assets/hero.jpg')",
            },
        },
    },
    plugins: [],
}
