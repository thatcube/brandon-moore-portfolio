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
        <div
          data-sal="fade"
          data-sal-easing="ease"
          data-sal-duration="750"
          data-sal-delay="0"
          className={style.heroBlock}
        ></div>
        <Container>
          <div
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="750"
            data-sal-delay="100"
            className="z-index row-1-start col-7-end col-1-start headline"
          >
            <h1 className={styles.title}>{about.tagline}</h1>

            <ul className={styles.social}>
              <li>
                <a className="link" href="https://www.linkedin.com/in/bmoore46/">
                  LinkedIn
                </a>
              </li>
              <li>&nbsp; · &nbsp;</li>
              <li>
                <a
                  className="link"
                  href="https://www.canva.com/design/DADt7gwJnKc/BVEhOXDTfZsZ78jSei0CJQ/view?utm_content=DADt7gwJnKc"
                >
                  Resume
                </a>
              </li>
              <li>&nbsp; · &nbsp;</li>
              <li>brandoncmoore4@gmail.com</li>
            </ul>
          </div>
          <div
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="750"
            data-sal-delay="100"
            className="row-1-start col-7-start col-9-end"
          >
            {about.image && about.image.asset && (
              <Img className={style.image} alt={about.image.alt} fluid={about.image.asset.fluid} />
            )}
          </div>
        </Container>
      </section>

      <section className={style.about}>
        <Container>
          <div
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="750"
            data-sal-delay="200"
            className="col-3-start col-7-end row-2-start about-section headline"
          >
            {about._rawBio && <BlockContent blocks={about._rawBio || []} />}
            <Link className="button about" to="/#projects">
              View Projects
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default AboutPage;
