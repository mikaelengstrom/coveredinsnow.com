module.exports = {
  siteMetadata: {
    title: `Covered in Snow `,
    description: `Synth Pop Made In Sweden. Covered in Snow was formed in 2017 and currently relevant with their latest release: Hurry Up to Love Here`,
    author: `Covered in Snow`,
    keywords: ['Stockholm Music', 'Covered in Snow Band', 'Indietronica Artist', 'Electro pop Artist', 'Swedish Synth Pop'],
    siteUrl: 'https://www.coveredinsnowband.com',
    metaImage: {
      src: 'src/images/hurry-up-to-love-here-album-cover.png',
      width: 200,
      height: 200,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#281C45`,
        theme_color: `#E9B1B9`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "coveredinsnow.com",
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
