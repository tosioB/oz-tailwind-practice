/** @type {import('tailwindcss').Config} */
export default {
  content: [ // index.html과 src에 있는 json,ts,jsx,tsx파일에 tailwind.css를 적용하겠다.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}