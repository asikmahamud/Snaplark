/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            primary: '#2178ff',
            secondary: '#4f46e5',
        },
        fontFamily: {
            sans: "'PT Sans', sans-serif"
        },
    },
    container: {
        padding: '1rem',
        center: true,
    }
},

plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
],
}
