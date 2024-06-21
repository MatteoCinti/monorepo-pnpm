/** @type {import('tailwindcss').Config} */
export default {
  content: ['**/*/index.html', '**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-main': '#000000'
      }
    }
  },
  plugins: []
};
