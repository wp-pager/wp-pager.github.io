/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,vue}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/src/assets/hero.jpg')",
            },
        },
    },
    plugins: [],
}
