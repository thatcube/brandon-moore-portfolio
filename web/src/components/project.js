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
import {button} from './button.module.css'

function Project(props) {
  const { _rawBody, projectNumber, title, categories, mainImage, members, publishedAt, relatedProjects } = props
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
            <span>{projectNumber}</span>
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
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <AniLink fade duration={0.5} className={button} to={`/project/${project.slug.current}`}>{project.title}</AniLink>
                      ) : (
                          <span>{project.title}</span>
                        )}
                    </li>
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
