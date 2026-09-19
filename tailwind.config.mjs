/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // "The Index" — monospace editorial. Near-black canvas, single amber accent.
        background: '#0c0c0d', // canvas
        base: '#0c0c0d', // canvas (alias)
        surface: '#141416', // faintly raised surface
        'current-line': '#3a3a42', // hairline / border base (used at low opacity)
        foreground: '#e9e9ec', // ink
        comment: '#8a8a92', // muted / label text
        // Accent — amber. purple/cyan/pink all collapse to one accent, used sparingly.
        purple: '#e0a05e',
        cyan: '#e0a05e',
        pink: '#e0a05e',
        orange: '#e0a05e',
        // Retained for code syntax / status
        green: '#7dcf8a',
        red: '#e0715e',
        yellow: '#e0c05e',
      },
      fontFamily: {
        // Single typeface — JetBrains Mono. Hierarchy by weight, not family.
        display: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
        sans: ['JetBrains Mono', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: {
        content: '68ch',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(1.25rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-drift': {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.18)', opacity: '0.72' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'glow-drift': 'glow-drift 14s ease-in-out infinite',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
};
