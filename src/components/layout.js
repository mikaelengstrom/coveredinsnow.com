/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Header from "./header"
import "./layout.scss"
import Helmet from "react-helmet";
import Footer from "./footer";

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
          metaImage {
            src
            width
            height
          }
        }
      }
    }
  `)

    const {
      title,
      description,
      author,
      keywords,
      siteUrl,
      metaImage,
    } = data.site.siteMetadata;

    const image = metaImage && metaImage.src
      ? `${siteUrl}${metaImage.src}`
      : null

    const canonical = siteUrl;

    return (
        <>
            <Helmet
                htmlAttributes={{lang: 'en'}}
                title={title}
                titleTemplate={`%s | ${title}`}
                link={
                    canonical
                        ? [
                            {
                                rel: "canonical",
                                href: canonical,
                            },
                        ]
                        : []
                }
                meta={[
                    {
                        name: `description`,
                        content: description,
                    },
                    {
                        name: "keywords",
                        content: keywords.join(","),
                    },
                    {
                        property: `og:title`,
                        content: title,
                    },
                    {
                        property: `og:description`,
                        content: description,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:creator`,
                        content: author,
                    },
                    {
                        name: `twitter:title`,
                        content: title,
                    },
                    {
                        name: `twitter:description`,
                        content: description,
                    },
                ]
                    .concat(
                        metaImage
                            ? [
                                {
                                    property: "og:image",
                                    content: image,
                                },
                                {
                                    property: "og:image:width",
                                    content: metaImage.width,
                                },
                                {
                                    property: "og:image:height",
                                    content: metaImage.height,
                                },
                                {
                                    name: "twitter:card",
                                    content: "summary_large_image",
                                },
                            ]
                            : [
                                {
                                    name: "twitter:card",
                                    content: "summary",
                                },
                            ]
                    )
                }
            />

            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto&display=swap"
                      rel="stylesheet"></link>
                <script async defer crossOrigin="anonymous"
                        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=660142844570412&autoLogAppEvents=1"
                        nonce="FOKrbAYI">
                </script>
                <script type="application/ld+json">
                    {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "url": "https://www.coveredinsnow.com",
                    "name": "Covered in Snow",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "email": "info@coveredinsnow.com",
                      "contactType": "Members"
                    }
                  }
              `}
                </script>
                <script type="application/ld+json">
                    {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "url": "https://www.coveredinsnow.com",
                    "sameAs" : ["https://www.facebook.com/coveredinsnowband/", "https://www.instagram.com/coveredinsnowband/"],
                    "name": "Covered in Snow",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "email": "info@coveredinsnow.com",
                      "contactType": "Members"
                    }
                  }
              `}
                </script>
                <script type="application/ld+json">
                    {`{
                       "@context": "http://schema.org",
                       "@type": "MusicGroup",
                       "@id": "https://www.coveredinsnow.com",
                       "name": "Covered in Snow",
                       "description": "${title}",
                       "sameAs" : ["https://www.facebook.com/coveredinsnowband/", "https://www.instagram.com/coveredinsnowband/"],
                       "member": [
                         {
                           "@type": "Person",
                           "name": "Mikael Engström"
                         },
                         {
                           "@type": "Person",
                           "name": "Tom Hedlund"
                         },
                       ],
                       "album": [
                         {
                          "@type": "MusicAlbum",
                          "@id": "https://www.coveredinsnow.com",
                          "name": "Hurry Up to Love Here",
                          "datePublished": 2020
                         }
                       ]
                     }`}
                </script>
            </Helmet>

            <div id="fb-root"></div>
            <div className={'site'}>
                <Header/>
                <div className={"layout__rect layout__rect--1"}></div>
                <div className={"layout__container"}>
                    <main className={"layout__main"}>{children}</main>

                </div>

                <Footer/>
                <div className={"layout__rect layout__rect--2"}></div>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
