module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                slideOne:
                    "url('https://firebasestorage.googleapis.com/v0/b/pc-webshop.appspot.com/o/pcSlider1.jpg?alt=media&token=5560663c-4926-4807-890e-522b72bdae90')",
                slideTwo:
                    "url('https://firebasestorage.googleapis.com/v0/b/pc-webshop.appspot.com/o/pcSlider2.jpeg?alt=media&token=7ba29541-d2e2-45b1-893f-b814014b069d')",
                slideThree:
                    "url('https://firebasestorage.googleapis.com/v0/b/pc-webshop.appspot.com/o/pcSlider3.jpg?alt=media&token=99c2c181-d97b-4ff2-88c3-3346e75c9349')",
            },
            keyframes: {
                hoverUp: {
                    '0%': { transform: 'translateY(10%)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
            },
            animation: {
                hoverUp: 'hoverUp 0.5s ease-out',
            },
            fontFamily: {
                sans: ['Roboto', 'Quicksand', 'Exo', 'sans-serif'],
                quicksand: ['Quicksand', 'sans-serif'],
                exo: ['Exo', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
