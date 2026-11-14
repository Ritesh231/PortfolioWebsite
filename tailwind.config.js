/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F9FB',
        surface: '#FFFFFF',
        foreground: '#111827',
        muted: '#64748B',
        accent: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          light: '#EEF2FF',
          dark: '#3730A3',
        },
        border: '#E5E7EB',
        success: {
          DEFAULT: '#10B981',
          light: '#ECFDF5',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(17, 24, 39, 0.05), 0 2px 6px -1px rgba(17, 24, 39, 0.02)',
        'card-hover': '0 20px 35px -5px rgba(17, 24, 39, 0.08), 0 10px 15px -3px rgba(17, 24, 39, 0.04)',
        'accent-glow': '0 10px 25px -5px rgba(79, 70, 229, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
