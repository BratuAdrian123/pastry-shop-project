/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'car-bg-0': "url('pictures/car-bg-1.jpg')",
        'car-bg-1': "url('pictures/car-bg-2.jpg')",
        'car-bg-2': "url('pictures/car-bg-3.jpg')",
      },
    },
  },
  plugins: [],
};
