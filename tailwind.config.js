/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if your code is in a different folder
  ],
  theme: {
    extend: {
      // You can add custom colors, spacing, etc. here if needed
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // Plugin to hide scrollbars
  ],
};
