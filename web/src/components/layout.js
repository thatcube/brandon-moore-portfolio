import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <li>
          <a target="_blank" href="https://dribbble.com/ThatCube">Dribbble</a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/bmoore46/">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:brandoncmoore4@gmail.com">Email</a>
        </li>
        <li>
          <a target="_blank" href="/">Resume</a>
        </li>
        <div className={styles.siteInfo}>
          Copyright whenever, this is <a target="_blank" href="https://github.com/thatcube/brandon-moore-portfolio">open source</a>.
        </div>
      </div>
    </footer>
  </>
)

export default Layout
