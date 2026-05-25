/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1e3f',
          deep: '#061533',
        },
        gold: {
          DEFAULT: '#c9a449',
          light: '#e3c478',
        },
        cream: '#faf6ee',
        paper: '#f5efe2',
        ink: '#1a1a1a',
        it: {
          green: '#008c45',
          red: '#cd212a',
        },
        kz: {
          blue: '#00afca',
          yellow: '#ffc72c',
        },
        green: {
          DEFAULT: '#00a651',
          dark: '#008040',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['clamp(46px, 6vw, 88px)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(34px, 4.2vw, 54px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        container: '1320px',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(ellipse at 20% 30%, rgba(201, 164, 73, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(0, 175, 202, 0.08) 0%, transparent 50%)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
