import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1, responsiveTitle3} from '../components/typography.module.css'
import { image } from '../components/about.module.css'

const AboutPage = () => (
  <>
    <Layout>
      <SEO title='About' />
      <Container>
        <h1 className={responsiveTitle1}>Hi there 👋</h1>
        <h3 className={responsiveTitle3}>I'm Brandon, a product designer with a passion for design and tech. I love design systems, CSS, and beautiful products that are built for everyone.</h3>
        <p>I'm currently working for CBORD, focusing on their consumer-facing products. I've been <AniLink fade duration={0.5} to={`/project/get`}>redesigning an entire app</AniLink> in the higher education space and in that process, I learned a lot about inclusive design and accessibility. I believe that designing for some leads to better solutions for all. Some other design-related interests include iconography, illustration, and animation.</p>
        <p>Outside of work, I love soccer, volleyball, and running.</p>
        <p>Thanks for stopping by!</p>
        <img className={ image } alt="Photo of Brandon Moore" src="https://res.cloudinary.com/thatcube/image/upload/v1571149978/brandon_moore_mht0vq.jpg"></img>
      </Container>
    </Layout>
    </>
)

export default AboutPage
