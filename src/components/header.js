import './header.scss'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ImageAlbumCover from "./ImageAlbumCover";
import ImageLogo from "./ImageLogo";


const Header = ({ siteTitle }) => (
  <header
      className={'header'}
  >
      <div className={'header__logo'}>
          <Link
              to="/"
              style={{
                  color: `white`,
                  textDecoration: `none`,
              }}
          >
              <ImageLogo/>
          </Link>
      </div>

      <div className={'header__image-wrapper'}>
          <div className={'header__text'}>
              Miljonprogrammet<br/>
              Out Now<br/>
          </div>

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
