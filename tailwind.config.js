/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './exampleSite/content/**/*.md',
    './exampleSite/layouts/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'matrix-green': '#00ff00',
        'matrix-dark-green': '#00cc00',
        'matrix-bright-green': '#00ff41',
        'terminal-black': '#1C1C1C',
        'terminal-dark-gray': '#0a0a0a',
        'terminal-gray': '#1a1a1a',
        'terminal-light-gray': '#2a2a2a',
        'terminal-text': '#00ff00',
        'terminal-muted': '#008800',
      },
      fontFamily: {
        'mono': ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
        'terminal': ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
      },
      animation: {
        'cursor-blink': 'cursor-blink 3s infinite',
        'matrix-rain': 'matrix-rain 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 70%': { opacity: '1' },
          '71%, 100%': { opacity: '0' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'glow': {
          '0%': { textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00' },
          '100%': { textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00' },
        },
      },
      backgroundImage: {
        'matrix-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2300ff00\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
}
