module.exports = {
  // Tailwind is handled by the Vite plugin (@tailwindcss/vite) configured in `vite.config.js`.
  // Using `tailwindcss` directly here triggers the PostCSS plugin error for newer Tailwind packages.
  plugins: {
    autoprefixer: {},
  },
}
