/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        pholder: "#A0A3BD", 
        labeling: "#6E7191", 
        succes: "#00BA88", 
        eror: "#ED2E7E", 
        btn1: "#00FF66", 
        btn2: "#DB4444", 
        bgSecondary: "#F5F5F5", 
      },
    },
  },
  plugins: [],
};
