// Shared Tailwind configuration for every page.
// Colours point to the CSS variables in styles.css (dark theme only).
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        raised: token('raised'),
        ink: { DEFAULT: token('ink'), 2: token('ink-2'), 3: token('ink-3') },
        accent: { DEFAULT: token('accent'), hover: token('accent-hover'), tint: token('accent-tint') },
        'on-accent': token('on-accent'),
        line: { DEFAULT: 'var(--line)', strong: 'var(--line-strong)' },
      },
    },
  },
};
