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
