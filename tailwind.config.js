/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html,js}"],
  theme: {
    extend: {
      
      flex: {
        '6': '6',
        '3': '3',
        '5': '5',
      },
      colors:{
      "black01":"#0F0913",
      gold1:"#F9CB33",
      vuejs:"#49e659"
    },
    size:{
      'rl':"200rem",
      1:"1%",
      '9/10':"90%"
    },
    boxShadow:{
      custom:" 0 0 1px 1px #FFFBA4",
      'custom1': '9px 9px 3px #ffff',
      'custom2': '3px 3px 3px #ffff',
    },
      
    fontFamily:{
      Jetbrains: ['JetBrains Mono', 'monospace'],
      "jetbrains":["JetBrains Mono",'monospace'],
      'jet_brains' : ['JetBrains Mono'],
    },
      // fontFamily:{
        
      // },
      // fontFamily: {
        
      // },
      screens:{
        'extrasmall':{"max":'593px'},
        'exsm':{"max":'460px'},
        'verysmall':{'max':"475px"},
        "640tk":{'max':"640px"},
        'sm_lead': {'max': '767px'},
      'md_lead': { 'max': '1023px'},
      'xs_lead': { 'max': '639px'},
      'xl_lead': { 'max': '1700px'},
      }
    },
  },
  plugins: [],
}

