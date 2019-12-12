import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import { responsiveTitle1, responsiveTitle3 } from '../components/typography.module.css'
import { image } from '../components/about.module.css'
import { about } from '../components/about.module.css'

const AboutPage = () => (
  <>
    <Layout>
      <SEO title='About Brandon Moore' />
      <Container>
        <section className={about}>
          <div className="row center-v">
            <div className="col">
              <h1 className={responsiveTitle1}>Hi there 👋</h1>
              <h2 className={responsiveTitle3}><span>I'm Brandon — currently creating products built for everyone at CBORD.</span></h2>
              <p>I'm passionate about accessibility and I'm not afraid to challenge the status quo. I'm a huge supporter of <a target="_blank" href="https://universaldesign.org/definition">Universal Design</a> and the <a target="_blank" href="https://a11yproject.com/">A11y Project</a>. I've spent a lot of time establishing design and development standards across the company that encourage accessibility best-practices.</p>
              <p></p>
            </div>
            <div className="col">
              <img className={image} alt="Photo of Brandon Moore" src="https://res.cloudinary.com/thatcube/image/upload/v1575691059/Brandon_Moore_Portrait_opt_po1owj.png"></img>
            </div>
          </div>
        </section>
      </Container>
      <div className="light-boi">
        <Container>
          <section className={about}>
            <div className="row center-v">
              <div className="col">
                <h2 className={responsiveTitle3}><span>What makes me, me?</span></h2>
                <p>Been listening to a lot of <a target="_blank" href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO0Tiwvu?si=jGCJSHxoQ7mOl5W3ljsH-g">BROCKHAMPTON</a></p>
                <p>Love small form factor PC builds, <a target="_blank" href="https://pcpartpicker.com/user/justimpressive/saved/GTFBZL">just rebuilt my computer</a></p>
                <p>I run a lot, play pickup volleyball every Wednesday, and enjoy soccer when it isn't snowing.</p>
              </div>
              <div className="col"></div>
            </div>
          </section>
        </Container>
      </div>
    </Layout>
  </>
)

export default AboutPage
