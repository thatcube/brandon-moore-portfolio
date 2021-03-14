import React from "react";
import { Link } from "gatsby";
import Container from "../components/container";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import scrollTo from "gatsby-plugin-smoothscroll";
import Img from "gatsby-image";

import style from "../components/about.module.css";
import styles from "../components/social.module.css";
import BlockContent from "../components/block-content";
import PageTransition from 'gatsby-plugin-page-transitions';

export const query = graphql`
  query AboutPageQuery {
    aboutPage: sanityAbout(slug: { current: { eq: "heyo" } }) {
      _rawBio
      image {
        alt
        caption
        asset {
          _id
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      tagline
      id
    }
  }
`;
const waveStyle = {
  width: '100vw',
}
const AboutPage = props => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const about = data && data.aboutPage;
  if (!about) {
    throw new Error("you done darn goofed, ur about page has no data");
  }
  return (

    <Layout>
      <SEO title="About" />
      <section className={styles.root}>
        <Container>
          <div

            className="col-1-start col-8-end row-1-start about-section headline"
          >
            <h1 className={styles.title}>{about.tagline}</h1>
            <div>{about._rawBio && <BlockContent blocks={about._rawBio || []} />}</div>
          </div>
          <div
            className="row-1-start col-6-start col-9-end"
          >
            {about.image && about.image.asset && (
              <Img className={style.image} alt={about.image.alt} fluid={about.image.asset.fluid} />
            )}
          </div>
        </Container>

      </section>
      <svg preserveAspectRatio="none" viewBox="0 0 1440 98" width="1440" height="98" fill="none" xmlns="http://www.w3.org/2000/svg" style={waveStyle}>
        <path d="M586.2 82.1c188.07-26.54 276.6-60.73 621.22-77.6 112.98-5.53 185.96.27 233.58 12.35V0H0v76.47c141.25 11.03 349.06 39.1 586.2 5.63z" fill="var(--color-image-background)" />
      </svg>
      
      <section>
        <Container>
          <div
            className="experience col-1-start col-8-end">
            <h2>Experience</h2>
            <ul>
              <li>Product Designer
            <span>CBORD & Horizon Software</span>
                <span>Dec 2018 - Present</span>
              </li>
              <li>UI Developer
          <span>CBORD</span>
                <span>May 2018 - Dec 2018</span>
                <span></span>
              </li>
              <li>Software Development Intern
          <span>CBORD</span>
                <span>Feb 2018 - May 2018</span>
                <span></span>
              </li>

            </ul>
          </div>
        </Container>
      </section>

      {/* <section className={style.about}>
        <Link className="button about" to="/#projects">
          View Projects
        </Link>
      </section> */}
    </Layout>
  );
};

export default AboutPage;
