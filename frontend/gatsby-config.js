module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://monkeys-cloud.lndo.site//`,
        apiBase: `api`, // optional, defaults to `jsonapi`
      },
    },
  ],
}