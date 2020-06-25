import './header.scss'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ImageAlbumCover from "./ImageAlbumCover";
import ImageNewSingleOut from "./ImageNewSingleOut";
import ImageLogo from "./ImageLogo";


const Header = ({ siteTitle }) => (
  <header
      className={'header'}
  >
      <h1 className={'header__logo'}>
          <Link
              to="/"
              style={{
                  color: `white`,
                  textDecoration: `none`,
              }}
          >
              <ImageLogo/>
          </Link>
      </h1>

      <div className={'header__image-wrapper'}>
        <ImageNewSingleOut className={'header__image-text'}/>
        <ImageAlbumCover className={'header__image-cover'}/>
      </div>

      <div className={'header__rect header__rect--1'} />
      <div className={'header__rect header__rect--2'} />
      <div className={'header__rect header__rect--3'} />

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        color: 'red',
        padding: `1.45rem 1.0875rem`,
      }}
    >
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
