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
        <h1>New Single Out Now:<br />Hurry Up to Love Here</h1>
        <p>Find it on your favourite streaming service:</p>
        <ul className={'index-page__link-list'}>
          <li><Link to="https://open.spotify.com/track/2XZfJokkt2qp0ilj3ZPlm9?si=WU_Y5BUVRO-uilbfkFF2uA">Spotify <ArrowRight/></Link></li>
          <li><Link to="https://soundcloud.com/coveredinsnowband/hurry-up-to-love-here">Sound Cloud <ArrowRight/></Link>
          </li>
          <li><Link to="https://music.apple.com/us/album/hurry-up-to-love-here-single/1516524016">Apple
            Music <ArrowRight/></Link></li>
          <li><Link
            to="https://play.google.com/store/music/album?id=Bbk5fozcybdbaknele4lkok72lm&tid=song-Tsn6ka7hdzgvdgzcvhieo22gmba&hl=en_US">Google
            Play<ArrowRight/></Link></li>
          <li><Link
              to="https://youtu.be/QGkLVh6h1NA">YouTube<ArrowRight/></Link></li>
        </ul>


        <p>If you like it, add it to your playlists and share it with your friends</p>

        <h2>About Covered in Snow</h2>
        <p>Covered in Snow is a Synth pop/Indietronica duo based in Stockholm, Sweden. They were formed in 2017 when the longtime friends Tom Hedlund and Mikael Engström ended up living in the same town for the first time in years. Their first release, Spaceboy, was released just a few months later.</p>
        <p>In April 2019, they released their conceptual EP, Collateral Damage, which explore feelings and their effects on individuals, their surroundings and society. Each song is representing one feeling, portrayed by the lyrics and soundscape. If you have ever wondered what shame, angst, guilt, regret or emptiness sounds like, give it a spin!</p>
        <p>While having their roots in 90s Alternative Rock and Trip Hop such as Smashing Pumpkins, Radiohead and Massive Attack the duo draw heavy inspiration from various genres of today such as Synth Pop, Electronica and Dream Pop, creating a unique sound that truly stands out on today's music scene.</p>
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
