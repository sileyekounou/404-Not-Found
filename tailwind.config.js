/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*{js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Mono', 'monospace'],        
        'inconsolata': ['Inconsolata', 'monospace'],
        'montserrat' : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

