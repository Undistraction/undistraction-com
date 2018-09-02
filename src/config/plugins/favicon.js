module.exports = () => ({
  resolve: `gatsby-plugin-favicon`,
  options: {
    logo: `./src/images/favicon/favicon.png`,
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      twitter: false,
      yandex: false,
      windows: false,
    },
  },
})
