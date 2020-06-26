import React from "react"
import {Link} from "gatsby"

import './index.scss'
import Layout from "../components/layout"
import ArrowRight from "../components/ArrowRight";
import SEO from "../components/seo"

const spotify = {__html: "<iframe src=\"https://open.spotify.com/follow/1/?uri=spotify:artist:5vLvTcyMJ6nc7MRWBLv9fX&size=detail&theme=light\" width=\"300\" height=\"56\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden;\" allowtransparency=\"true\"></iframe>"}

const IndexPage = () => (
  <Layout>
    <div className="column">
      <article className={'main-content'}>
        <SEO title="New Single: Hurry Up to Love Here"/>
        <h1>Synth Pop,<br /> Made in Sweden</h1>

        <p>We are Covered in Snow, a Synth Pop/Indietronica duo based in Stockholm brewing since 2017.</p>
        <p>We just released our new single: Hurry Up to Love Here. Fill your speakers with Synth Pop and if you like it, tell your friends, if you do not: Tell us.</p>

        <ul className={'index-page__link-list'}>
          <li><Link to="https://open.spotify.com/artist/5vLvTcyMJ6nc7MRWBLv9fX">Spotify <ArrowRight/></Link></li>
          <li><Link to="https://soundcloud.com/coveredinsnowband/hurry-up-to-love-here">Sound Cloud <ArrowRight/></Link>
          </li>
          <li><Link to="https://itunes.apple.com/us/artist/covered-in-snow/1298147361">Apple
            Music <ArrowRight/></Link></li>
          <li><Link
            to="https://play.google.com/store/music/artist/Covered_in_Snow?id=Akq4ivfidlefngmq5latx7wd46a&hl=en_US">Google
            Play<ArrowRight/></Link></li>
        </ul>

        <p>Best wishes / Mikael Engström and Tom Hedlund</p>
      </article>
    </div>

    <div className="column">
      <div className={'share-box'}>
        <h2 className={'share-box__headline'}>Do not miss out on new releases</h2>
        <strong className={'share-box__sub-caption'}>Follow us on Facebook and Spotify</strong>
        <div className={'share-box__spotify'} dangerouslySetInnerHTML={spotify}></div>
        <div className={'share-box__facebook'}>
          <div className="fb-page"
               data-href="https://www.facebook.com/coveredinsnowband"
               data-width="272"
               data-hide-cover="false"
               data-show-facepile="false"></div>
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
