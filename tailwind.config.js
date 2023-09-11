export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      width: {
        '2xl': '1320px',
        'xl': '1000px',
        'lg': '750px', // 900px
        'md': '90%',
        'sm': '90%',
        'xs': '95%'
      },

      fontFamily: {
        'varela': ['Varela Round'],
        'nova': ['Alegreya Sans SC'],
        'lato': ['Lato'],
        'open_sans': ['Open Sans'],
        'roboto': ['Roboto'],
        'web': ['Titillium Web'],
        'pt': ['PT Sans'],
      },

      colors: {
        'primary': '#d7253f',
        'secondary': '#0a0e1a',
        'third': '#232731',
        'fourth': '#32343e',
        'fifth': '#131827',
        'sixth': '#0a0e1a',
        'seventh': '#090d18',

        // text
        'text_light': '#FFFFFF'
      }
    },
  },
  plugins: [],
}

