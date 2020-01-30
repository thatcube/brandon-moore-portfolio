import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import style from '../components/about.module.css'
import styles from '../components/social.module.css'

const AboutPage = () => (
  <>
    <Layout>
      <SEO title='About' />
      <div className="light-boi">
        <section className={styles.root}>
          <Container>
            <div className="col-7-end col-1-start headline">
              <h1 data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="100" className={styles.title}>Striving to create products built for all people</h1>
              <ul data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="100" className={styles.social}>
                <li><a className="link" target="_blank" href="https://www.linkedin.com/in/bmoore46/">LinkedIn</a></li>
                <li>&nbsp; · &nbsp;</li>
                <li><a className="link"  target="_blank" href="https://www.canva.com/design/DADt7gwJnKc/BVEhOXDTfZsZ78jSei0CJQ/view?utm_content=DADt7gwJnKc">Resume</a></li>
                <li>&nbsp; · &nbsp;</li>
                <li>brandoncmoore4@gmail.com</li>
              </ul>
            </div>
            <div className="col-7-start col-9-end">
              <img data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="100" className={style.image} alt="Photo of Brandon Moore" src="https://res.cloudinary.com/thatcube/image/upload/v1571149978/brandon_moore_mht0vq.jpg"></img>
            </div>
          </Container>
        </section>
      </div>

      <section className={style.about}>
        <Container>
          <div className="col-3-start col-7-end headline">
            <p data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="150">Hey there! 👋</p>
          </div>
          <div className="col-3-start col-7-end row-2-start headline">
            <p data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="150">I’m Brandon, a Product Designer at CBORD working on its consumer-facing products.</p>
            <p data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="150">I believe in a web for everyone and I constantly try to reinforce this belief in my design work. I aim to create products that go beyond simply understanding the users’ goals. I try to understand their personal circumstances; their challenges, their environment, their abilities, and their access to technology.</p>
            
            <p data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="150">I have a bachelor’s degree in web development from Alfred State and started my career as a front-end developer. However, I quickly realized that my passion was in the design space. I still write code from time to time and especially enjoy some well-crafted CSS.</p>
            <p data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="150">Outside of design, some passions of mine are running, music, mechanical keyboards, small form factor PCs, and soccer.</p>
          </div>
        </Container>
      </section>
    </Layout>
  </>
)

export default AboutPage
