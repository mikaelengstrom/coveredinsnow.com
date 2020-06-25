import React from "react"
import { Link } from "gatsby"

import './index.scss'
import Layout from "../components/layout"
import ArrowRight from "../components/ArrowRight";
import SEO from "../components/seo"

const spotify = {__html: "<iframe src=\"https://open.spotify.com/follow/1/?uri=spotify:artist:5vLvTcyMJ6nc7MRWBLv9fX&size=detail&theme=light\" width=\"300\" height=\"56\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden;\" allowtransparency=\"true\"></iframe>"}
const facebook = {__html: "<div class=\"fb-page\" data-href=\"https://www.facebook.com/coveredinsnowband/\" data-tabs=\"timeline\" data-width=\"\" data-height=\"115\" data-small-header=\"false\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"false\"><blockquote cite=\"https://www.facebook.com/coveredinsnowband/\" class=\"fb-xfbml-parse-ignore\"><a href=\"https://www.facebook.com/coveredinsnowband/\">Covered in Snow</a></blockquote></div>"}

const IndexPage = () => (
  <Layout>
    <SEO title="New Single: Hurry Up to Love Here" />
    <h1>Synth Pop Made in Sweden</h1>
    <p>Covered in Snow are an Synth Pop/Indietronica duo from Stockholm, Sweden. Formed in 2017 by Mikael Engström and Tom Hedlund.</p>
    <p>They reacently released a new single: “Hurry Up to Love Here”. Fill your speakers with Synth Pop on your favourite platform:</p>

    <ul className={'index-page__link-list'}>
      <li><Link to="https://open.spotify.com/artist/5vLvTcyMJ6nc7MRWBLv9fX">Spotify <ArrowRight/></Link></li>
      <li><Link to="https://soundcloud.com/coveredinsnowband/hurry-up-to-love-here">Sound Cloud <ArrowRight/></Link></li>
      <li><Link to="https://itunes.apple.com/us/artist/covered-in-snow/1298147361">Apple Music <ArrowRight/></Link></li>
      <li><Link to="https://play.google.com/store/music/artist/Covered_in_Snow?id=Akq4ivfidlefngmq5latx7wd46a&hl=en_US">Google Play<ArrowRight/></Link></li>
    </ul>


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
  </Layout>
)

export default IndexPage
