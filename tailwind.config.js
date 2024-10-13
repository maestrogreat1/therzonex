/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Allura: "Allura",
    },
    extend: {
      colors: {
        Write: "#bbf37a",
        Bubble: "#567d8e",
        Teal: "#23D6A8",
        HummingBird: "#d1f1ee",
        yellow: "#DFC786",
        Solitude: "#e9e9ea",
        gray: "#4b4B4C",
      },
      animation: {
        slide: "slide 10s linear infinite",
      },
      keyframes: {
        slide: {
          "0%, 100%": { transform: "translateX(5%)" },
          "50%": { transform: "translateX(-20%)" },
        },
      },
      backgroundImage: {
        'coachings': "url('./src/assets/Images/VanBubbles.png')",
        
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      xx: "430px"
    },
  },
  plugins: [],
}
