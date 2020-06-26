/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import Helmet from "react-helmet";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto&display=swap" rel="stylesheet"></link>
          <script async defer crossOrigin="anonymous"
                  src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=660142844570412&autoLogAppEvents=1"
                  nonce="FOKrbAYI">
          </script>
      </Helmet>
      <div id="fb-root"></div>
      <div className={'site'}>
          <Header siteTitle={data.site.siteMetadata.title}/>
          <div className={"layout__rect layout__rect--1"}></div>
          <div className={"layout__container"}>
            <main className={"layout__main"}>{children}</main>

          </div>

        <Footer />
        <div className={"layout__rect layout__rect--2"}></div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
