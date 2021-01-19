import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import Img from "gatsby-image";
import BlockContent from "./block-content";
import Container from "./container";
import { Link } from "gatsby";

import styles from "./project.module.css";

function Project(props) {
  const {
    _rawBody,
    title,
    shortdesc,
    role,
    timeframe,
    heroImage,
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
      data-sal-easing="ease-in-cubic"
      data-sal-duration="150"
      data-sal-delay="0"
      className={styles.root}
    >
      <aside className="project-header">
        <Container>
          <div data-sal="slide-up"
        data-sal-easing="ease"
          data-sal-duration="800"
          data-sal-delay="0" className="row-1-start col-1-start col-9-end">
            <h1 className={styles.title}>{title}</h1>
          </div>
          <div data-sal="slide-up"
        data-sal-easing="ease"
          data-sal-duration="1200"
          data-sal-delay="0" className="row-2-start col-1-start col-9-end"><span  className={styles.shortdesc}>{shortdesc}</span></div>
        </Container>
        <div data-sal="slide-up"
        data-sal-easing="ease"
          data-sal-duration="800"
          data-sal-delay="0">{
            props.mainImage && mainImage.asset && (
              <Img
                className={styles.mainImage}
                alt={mainImage.alt}
                objectFit="cover"
                objectPosition="50% 50%"
                fluid={mainImage.asset.fluid}
              />
            )}</div>
      </aside>

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
      
      {/* <Container>
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
      </Container> */}

      <aside className="project-info">
          
          <span className="col">
            <span><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.38364 5.38364 0 12 0C18.6164 0 24 5.38364 24 12C24 18.6164 18.6164 24 12 24C5.38364 24 0 18.6164 0 12Z" fill="rgba(var(--color-background-inverted-rgb), 0.2)"></path><circle cx="12" cy="12" r="8" fill="var(--color-text-high-contrast)"></circle><circle cx="12" cy="12" r="5" fill="var(--color-background)"></circle><circle cx="12" cy="12" r="2" fill="var(--color-text-high-contrast)"></circle></svg></span>
            <span className="project-header-caption">Problem</span>
            {timeframe}
          </span>
          <span className="col">
            <span><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.38364 5.38364 0 12 0C18.6164 0 24 5.38364 24 12C24 18.6164 18.6164 24 12 24C5.38364 24 0 18.6164 0 12Z" fill="rgba(var(--color-background-inverted-rgb), 0.2)"></path><circle cx="12" cy="12" r="8" fill="var(--color-text-high-contrast)"></circle><path d="M8.5 12L11 14.5L15.5 10" stroke="var(--color-background)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
            <span className="project-header-caption">Solution</span>
            {when}
          </span>
          <span className="col">
            <span>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="12" fill="rgba(var(--color-background-inverted-rgb), 0.2)"/>
  <circle cx="12" cy="12" r="8" fill="var(--color-text-high-contrast)"/>
  <path d="M12 8c-.546 0-.962.186-1.252.536-.26.315-.414.758-.464 1.295-.054.563.019.99.25 1.295.266.352.741.536 1.466.536.724 0 1.199-.186 1.465-.54.23-.307.303-.733.252-1.291-.05-.545-.204-.988-.465-1.302C12.963 8.183 12.548 8 12 8zm0 4.215c1.366 0 2.308.697 2.89 1.784.341.635-.158 1.325-.884 1.325H9.994c-.726 0-1.225-.69-.885-1.325.583-1.088 1.525-1.784 2.891-1.784z" fill="var(--color-background)"/>
</svg>



            </span>
            <span className="project-header-caption">My Role</span>
            {role}
          </span>
      </aside> 
      {_rawBody && <BlockContent blocks={_rawBody || []} />}
      
      {/* <button className="button to-top" onClick={() => scrollTo('#top-of-page')}>Back to Top <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.7 8.306l5 5.107c.2.204.3.408.3.715 0 .306-.1.51-.3.715-.4.408-1 .408-1.4 0l-3.3-3.37v7.676a1 1 0 01-1.993.117L11 19.149v-7.676l-3.3 3.37c-.4.408-1 .408-1.4 0-.4-.409-.4-1.022 0-1.43l5-5.107c.4-.408 1-.408 1.4 0zM17 4a1 1 0 01.117 1.993L17 6H7a1 1 0 01-.117-1.993L7 4h10z" fill="currentColor" fill-rule="nonzero"/></svg></button> */}
      <div className={styles.relatedProjects}>
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
        
      )}
    </aside>
  </Container>
  </div>
  </article>
  );
}

export default Project;
