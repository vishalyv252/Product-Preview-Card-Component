/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "Dark_cyan": "hsl(158, 36%, 37%)",
        "Cream": "hsl(30, 38%, 92%)",
        "Very_dark_blue": "hsl(212, 21%, 14%)",
        "Dark_grayish_blue": "hsl(228, 12%, 48%)",
        "White": "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        "Fraunces": ["Fraunces", "serif"],
        "Montserrat": ["Montserrat", "sans-serif"]
      },
      screens: {
        "Tablet_Device_Size_View": {"max": "768px", "min": "426px"},
        "Large_Mobile_Device_Size_View": {"max": "426px", "min": "375px"},
        "Medium_Mobile_Device_Size_View": {"max": "375px", "min": "321px"},
        "Small_Mobile_Device_Size_View": {"max": "321px"}
      }
    },
  },
  plugins: [],
}

