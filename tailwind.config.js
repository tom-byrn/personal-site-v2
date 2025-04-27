// tailwind.config.js
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        keyframes: {
          glow: {
            '0%, 100%': {
              textShadow:
                '0 0 8px rgba(46,234,200,0.7), 0 0 16px rgba(224,58,255,0.7)',
            },
            '50%': {
              textShadow:
                '0 0 16px rgba(46,234,200,1), 0 0 24px rgba(224,58,255,1)',
            },
          },
        },
        animation: {
          glow: 'glow 2s ease-in-out infinite alternate',
        },
      },
    },
    plugins: [],
  }
  