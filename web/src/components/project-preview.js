import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";

import styles from "./project-preview.module.css";
import { responsiveTitle2 } from "./typography.module.css";

function ProjectPreview(props) {
  return (
    <Link className={styles.root} to={`/${props.slug.current}`}>
      <div className={styles.projectThumbnail}>
        {props.mainImage && props.mainImage.asset && (
          <Img alt={props.mainImage.alt} objectFit="cover" fluid={props.mainImage.asset.fluid} />
        )}
      </div>
      <div className={styles.projectDesc}>
        <h2 className={styles.title}>{props.title}</h2>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <BlockText className={styles.excerpt} blocks={props._rawExcerpt} />
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProjectPreview;
