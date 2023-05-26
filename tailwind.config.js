/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // font-size - liner-height
        pm: ['14px', '20px'], // paragraph mobile
        pt: ['16', '24px'], // table
        pd: ['18px', '28px'], // desktop
      },
      colors: {
        white: '#fff',
        neutral: {
          100: '#F2F4F7',
          300: '#CDD2DA',
          500: '#637083',
          700: '#344051',
          900: '#141C24',
        },
        primary: {
          100: '#CCEAFF',
          300: '#66BFFF',
          500: '#0066FF',
          700: '#0052CC',
          900: '#002966',
        },
        alert: {
          error: '#F64C4C',
          success: '#39AC73',
          info: '#33A9FF',
          warning: '#FFB21A',
        },
      },
    },
  },
  plugins: [],
};
