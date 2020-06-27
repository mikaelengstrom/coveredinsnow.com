module.exports = {
    siteMetadata: {
        title: `Covered in Snow `,
        description: `Synth Pop Made In Sweden. Covered in Snow was formed in 2017 and currently relevant with their latest release: Hurry Up to Love Here`,
        author: `Covered in Snow`,
        keywords: ['Stockholm Music', 'Covered in Snow Band', 'Indietronica Artist', 'Electro pop Artist', 'Swedish Synth Pop'],
        siteUrl: 'https://coveredinsnow.com',
        metaImage: {
            src: '/images/hurry-up-to-love-here-album-cover.png',
            width: 200,
            height: 200,
        },
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-robots-txt',
        'gatsby-plugin-sitemap',
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
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-PCCRPRW",

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                //defaultDataLayer: {platform: "gatsby"},

                // Specify optional GTM environment details.
                //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
                //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
                //dataLayerName: "YOUR_DATA_LAYER_NAME",

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                // routeChangeEventName: "Navigate",
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
