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
      primary: 'DM Serif Display',
      secondary: 'Jost',
      sans: 'Open Sans',
    },
    extend: {
      colors: {
        White: "#e7e5d9",
        about: "#31658d",
        Bubble: "#567d8e",
        Teal: "#31658d",
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
        'hero': "url('./src/assets/Images/herobag.png')",
        'session': "url('./src/assets/Images/vansess.png')",
        'contact': "url('./src/assets/Images/vancon.png')",
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
