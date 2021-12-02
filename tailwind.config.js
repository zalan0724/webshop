module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'slideOne': "url('https://firebasestorage.googleapis.com/v0/b/pc-webshop.appspot.com/o/pcSlider1.jpg?alt=media&token=5560663c-4926-4807-890e-522b72bdae90')",
        'slideTwo': "url('https://firebasestorage.googleapis.com/v0/b/pc-webshop.appspot.com/o/pcSlider2.jpeg?alt=media&token=7ba29541-d2e2-45b1-893f-b814014b069d')",
        'slideThree': "url('https://firebasestorage.googleapis.com/v0/b/pc-webshop.appspot.com/o/pcSlider3.jpg?alt=media&token=99c2c181-d97b-4ff2-88c3-3346e75c9349')",
        //'slideOne': "url('/media/pcSlider1.jpg')",
        //'slideTwo': "url('/media/pcSlider2.jpeg')",
        //'slideThree': "url('/media/pcSlider3.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded'],
    extend: {},
  },
}
