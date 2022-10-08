module.exports = {
  siteMetadata: {
    title: `Radhil's Ecommerce`,
    siteUrl: `https://radhil.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Radhil's Ecommerce`,
        short_name: `Canada`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
