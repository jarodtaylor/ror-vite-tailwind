/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/frontend/stylesheets/**/*.css',
    './app/views/**/*.{html,html.erb,erb}',
    './app/frontend/**/*.js',
  ],
  theme: {
    extend: {
    },
  },
}