import {Link} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'

import styles from './project-preview.module.css'
import {responsiveTitle2} from './typography.module.css'

function ProjectPreview (props) {
  return (
    <AniLink fade duration={0.5} className={styles.root} to={`/project/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(2000)
              .height(Math.floor((9 / 19.5) * 2000))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.cardBottom}>
      <h2 className={cn(responsiveTitle2, styles.title)}>{props.title}</h2>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText className={styles.excerpt} blocks={props._rawExcerpt} />
        </div>
      )}
      </div>
    </AniLink>
  )
}

export default ProjectPreview
