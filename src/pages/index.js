import React from "react"

import './index.scss'
import Layout from "../components/layout"
import ArrowRight from "../components/ArrowRight";
import Seo from "../components/seo"

const spotify = {__html: "<iframe src=\"https://open.spotify.com/follow/1/?uri=spotify:artist:5vLvTcyMJ6nc7MRWBLv9fX&size=detail&theme=light\" width=\"300\" height=\"56\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden;\" allowtransparency=\"true\"></iframe>"}

const IndexPage = () => (
  <Layout>
    <div className="column">
      <article className={'main-content'}>
        <Seo title="New Single: The Self-Defeated"/>


        <h1 className={"index-page__headline"}>New Single Out Now:<br />Starlings</h1>
        <p>Find it on your favourite streaming service:</p>

        <ul className={'index-page__link-list'}>
          <li><a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/5vLvTcyMJ6nc7MRWBLv9fX?si=mwG0eH5dQcayNlovhAiXPQ">Spotify <ArrowRight/></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://youtu.be/3T_DYRhJahU">YouTube<ArrowRight/></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://soundcloud.com/coveredinsnowband/starlings">Sound Cloud <ArrowRight/></a>
          </li>
          <li><a target="_blank" rel="noreferrer" href="https://music.apple.com/us/album/starlings-single/1593014205">Apple
            Music <ArrowRight/></a></li>
          <li><a
            target="_blank"
            rel="noreferrer"
            href="https://music.youtube.com/channel/UCnDb3ISL5pP5CbX-mrYTzoQ">YouTube Music<ArrowRight/></a></li>
          <li><a
              target="_blank"
              rel="noreferrer"
              href="https://coveredinsnow.bandcamp.com">Bandcamp<ArrowRight/></a></li>
        </ul>

        <p>If you like it, add it to your playlists and share it with your friends</p>

        <h2>About Covered in Snow</h2>
        <p>Synthpop, Electronic pop, Synthwave, Dream pop - it’s hard to fit <em>Covered in Snow</em> into only one genre. But maybe that's a part of what makes the Stockholm duo's music unique. Together their influences form a stable ground to what is now their own sound. A sound that stands out in today's music scene.</p>
        <p>The band was formed in 2017 when longtime friends Tom Hedlund and Mikael Engström ended up living in the same town for the first time in years. Their first single, <em>Spaceboy</em>, was released just a few months later and its two tracks were originally written for their previous, now discontinued project <em>Shallow Sense</em>, but were never released because they were a bit too dark to fit into that project's genre.</p>
        <p>Since then Covered in Snow has released one EP and several singles which have been heard on the radio in several countries as well as on Swedish national television. They have received great reviews and their song <em>Guilt</em> was awarded the seventeenth best song of the year by Popmuzik.se.</p>
        <p>In the year 2021, Covered in Snow will release seven new songs. <em>The Self-Defeated</em> is the latest one.</p>
      </article>
    </div>

    <div className="column">
      <div className={'share-box'}>
        <h2 className={'share-box__headline'}>Do not miss out on new releases</h2>
        <strong className={'share-box__sub-caption'}>Follow us on Social Media</strong>
        <div className={'share-box__spotify'} dangerouslySetInnerHTML={spotify}></div>
        <div className={'share-box__youtube'}>
          <div className="g-ytsubscribe" data-channelid="UC_CRzrUVuc95y5csGlDnMPg" data-layout="full"
               data-count="hidden"></div>
        </div>
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
