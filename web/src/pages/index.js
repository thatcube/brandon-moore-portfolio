import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import scrollTo from "gatsby-plugin-smoothscroll";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import LayoutContainer from "../containers/layout"
import { hero } from "../components/hero.module.css";
import { Spring } from 'react-spring/renderprops'



export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    projects: allSanityProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <div>
        <GraphQLErrorList errors={errors} />
      </div>
    );
  }

  const site = (data || {}).site;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <div className="hc-bg">
      <LayoutContainer>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <Container>
         <div className="col-1-start col-9-end">
            <div className={hero}>
              
                <h1>
                  Brandon Moore.
            <br />
              Product Designer, Accessibility at Microsoft.
            </h1>
              
              <h2>
                <span>Crafting digital</span>
                <span>experiences built</span>
                <span>for all people.</span>
              </h2>
            </div>
          </div>
        </Container>
        {/* <button className="button" onClick={() => scrollTo('#projects')}>My link</button> */}
        <Container>
          <div id="projects" className="col-1-start col-9-end">
            {projectNodes && <ProjectPreviewGrid nodes={projectNodes} />}
          </div>
        </Container>
      </LayoutContainer>
    </div>
  );
};

export default IndexPage;
