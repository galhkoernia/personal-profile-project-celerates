/* 
 * File  : tailwind.config.js
 * Created on Tue Oct 26 2025
 * Author: Galuh Kurnia
 * Copyright (c) 2025 Your Company
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0a192f',
          light: '#112240',
        },
        sky: {
          DEFAULT: '#1e3a8a',
        }
      },
    },
  },
  plugins: [],
}