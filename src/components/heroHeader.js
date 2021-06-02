import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
          <p>
            <a href="https://podcasts.apple.com/us/podcast/jamming-fm/id1469760108?itsct=podcast_box_appicon&amp;itscg=30200" >
              <img src="/assets/logos/apple-podcast.png" alt="Apple Podcasts" height="30px"/>
            </a>　
            <a href="https://open.spotify.com/show/5zCikfl5tXX9DPMQ8Hxih3" >
              <img src="/assets/logos/Spotify_Icon_RGB_Green.png" alt="Spotify" height="30px"/>
            </a>　
            <a href="https://soundcloud.com/jammingfm"> 
              <img src="/assets/logos/soundcloud.png" alt="SoundCloud" height="30px" />
            </a>
          </p>
        </div>
      </div>
    )}
    />
)

