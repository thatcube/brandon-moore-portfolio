import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";
import RoleList from "./role-list";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

import styles from "./project.module.css";

function Project(props) {
  const {
    _rawBody,
    title,
    shortdesc,
    role,
    timeframe,
    when,
    _rawExcerpt,
    categories,
    mainImage,
    members,
    publishedAt,
    relatedProjects
  } = props;
  return (
    <article
      data-sal="fade"
      data-sal-easing="easeInOutSine"
      data-sal-duration="1000"
      data-sal-delay="0"
      className={styles.root}
    >
      <aside className="project-header">
        <Container>
          <span className="row-1-start col-1-start col-7-end">
            <h1 className={styles.title}>{title}</h1>
          </span>
          <span className="row-2-start col-1-start col-5-end">{shortdesc}</span>
          <span className="col-5-start col-7-end">
            <span className="project-header-caption">Role:</span>
            {role}
          </span>
          <span className="col-7-start">
            <span className="project-header-caption">Duration:</span>
            {timeframe}
          </span>
          <span className="col-8-start">
            <span className="project-header-caption">When:</span>
            {when}
          </span>
        </Container>
      </aside>
      {props.mainImage && mainImage.asset && (
        <picture className={styles.mainImage}>
          <source
            type="image/webp"
            srcSet={imageUrlFor(buildImageObj(mainImage))
              .width(3000)
              .height(Math.floor((9 / 16) * 3000))
              .fit("crop")
              .auto("format")
              .url()}
          ></source>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(3000)
              .height(Math.floor((9 / 16) * 3000))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
            loading="lazy"
          />
        </picture>
      )}
      {/* {props.mainImage && mainImage.asset && (
        <Img
          className={styles.mainImage}
          src={imageUrlFor(buildImageObj(mainImage))
            .width(3000)
            .height(Math.floor((9 / 16) * 3000))
            .fit("crop")
            .auto("format")
            .url()}
        />
      )} */}

      <div className="special">{_rawBody && <BlockContent blocks={_rawBody || []} />}</div>
      <Container>
        <aside className="col-1-start col-9-end">
          {/* {publishedAt && (
            <div className={styles.publishedAt}>Last Updated: &nbsp;
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'MMMM Do YYYY')}
            </div>
          )}
          {members && members.length > 0 && <RoleList items={members} title='Project members' />}
          {categories && categories.length > 0 && (
            <div className={styles.categories}>
              <h3 className={styles.categoriesHeadline}>Categories</h3>
              <ul>
                {categories.map(category => (
                  <li key={category._id}>{category.title}</li>
                ))}
              </ul>
            </div>
          )} */}
          {relatedProjects && relatedProjects.length > 0 && (
            <div className={styles.relatedProjects}>
              <ul>
                {relatedProjects.map(project => (
                  <React.Fragment key={`related_${project._id}`}>
                    {project.slug ? (
                      <Link to={`/${project.slug.current}`}>{project.title}</Link>
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </Container>
      {/* <button className="button to-top" onClick={() => scrollTo('#top-of-page')}>Back to Top <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.7 8.306l5 5.107c.2.204.3.408.3.715 0 .306-.1.51-.3.715-.4.408-1 .408-1.4 0l-3.3-3.37v7.676a1 1 0 01-1.993.117L11 19.149v-7.676l-3.3 3.37c-.4.408-1 .408-1.4 0-.4-.409-.4-1.022 0-1.43l5-5.107c.4-.408 1-.408 1.4 0zM17 4a1 1 0 01.117 1.993L17 6H7a1 1 0 01-.117-1.993L7 4h10z" fill="currentColor" fill-rule="nonzero"/></svg></button> */}
    </article>
  );
}

export default Project;
