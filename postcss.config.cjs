module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {
      config: './tailwind.config.cjs'
    },
    autoprefixer: {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': false
      }
    },
    'postcss-pxtorem': {},
  },
}