import React from 'react'
import { Link } from 'gatsby'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import style from '../components/about.module.css'
import styles from '../components/social.module.css'

const AboutPage = () => (
  <>
    <Layout>
      <SEO title='About' />
      <section className={styles.root}>
        <div data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="0" className={style.heroBlock}></div>
        <Container>
          <div data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="100" className="z-index row-1-start col-7-end col-1-start headline">
            <h1 className={styles.title}>Striving to create products built for all people</h1>
            <ul className={styles.social}>
              <li><a className="link" target="_blank" href="https://www.linkedin.com/in/bmoore46/">LinkedIn</a></li>
              <li>&nbsp; · &nbsp;</li>
              <li><a className="link" target="_blank" href="https://www.canva.com/design/DADt7gwJnKc/BVEhOXDTfZsZ78jSei0CJQ/view?utm_content=DADt7gwJnKc">Resume</a></li>
              <li>&nbsp; · &nbsp;</li>
              <li>brandoncmoore4@gmail.com</li>
            </ul>
          </div>
          <div className="row-1-start col-7-start col-9-end">
            <img data-sal="fade" data-sal-easing="ease" data-sal-duration="1000" data-sal-delay="100" className={style.image} alt="Photo of Brandon Moore" src="https://res.cloudinary.com/thatcube/image/upload/v1571149978/brandon_moore_mht0vq.jpg"></img>
          </div>
        </Container>
      </section>

      <section className={style.about}>
        <Container>
          <div className="col-3-start col-7-end headline">
            <p data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="0">Hey there! 👋</p>
          </div>
          <div className="col-3-start col-7-end row-2-start headline">
            <p data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="0">I’m Brandon, a Product Designer at CBORD working on its consumer-facing products.</p>
            <p data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="0">I believe in a web for everyone and constantly try to reinforce this belief in my design work. Accessibility isn't something that you tack on to good design—it is good design.</p>
            <p data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="0">I started my career as a front-end, UI Developer, but quickly realized that my passion was for design. Having been a developer, I understand the constraints and difficulty of implementing any designs. I still write code from time to time and especially enjoy some well-crafted CSS.</p>
            <p data-sal="fade" data-sal-easing="ease" data-sal-duration="750" data-sal-delay="0">Outside of design, some of my passions are: soccer, volleyball, running, mechanical keyboards, small form factor PCs, and music.</p>
          </div>
        </Container>
      </section>
    </Layout>
  </>
)

export default AboutPage
