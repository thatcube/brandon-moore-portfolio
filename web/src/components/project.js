import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import styles from './project.module.css'
import { button } from './button.module.css'

function Project(props) {
  const { _rawBody, title, categories, mainImage, members, publishedAt, relatedProjects } = props
  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(3000)
              .height(Math.floor((9 / 16) * 3000))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
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
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Next Project</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <React.Fragment key={`related_${project._id}`}>
                      {project.slug ? (
                        <AniLink fade duration={0.5} className={button} to={`/project/${project.slug.current}`}>{project.title}  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.7 6.3l5 5c.4.4.4 1 0 1.4l-5 5a1 1 0 01-.7.3 1 1 0 01-.7-.3 1 1 0 010-1.4l3.3-3.3H2.9c-.5 0-.9-.4-.9-1s.4-1 1-1h14.6l-3.3-3.3a1 1 0 010-1.4 1 1 0 011.4 0z" fill="currentColor" fill-rule="nonzero" /></svg></AniLink>
                      ) : (
                          <span>{project.title}</span>
                        )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Project
