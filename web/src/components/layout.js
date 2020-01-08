import React from 'react'
import Header from './header'
import Container from '../components/container'

import '../styles/layout.css'
import '../styles/global.css'
import styles from './layout.module.css'
import { headline } from '../components/typography.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>

    <Container>
      <div className={styles.footerWrapper}>
        <footer className={styles.footer}>
          <div className="row center-v">
            <div className="col">
              <ul>
                <li>
                  <a className={headline} target="_blank" href="https://www.linkedin.com/in/bmoore46/">LinkedIn</a>
                </li>
                <li>
                  <a className={headline} target="_blank" href="https://www.canva.com/design/DADt7gwJnKc/BVEhOXDTfZsZ78jSei0CJQ/view?utm_content=DADt7gwJnKc">Resume</a>
                </li>
                <li className={headline}>
                  brandoncmoore4@gmail.com
              </li>
              </ul>
            </div>
            <div className="col">
              <p className={headline}>
                Designed and built by me. Copyright whenever, this is <a target="_blank" href="https://github.com/thatcube/brandon-moore-portfolio">open source</a>.
            </p>
            </div>
          </div>
        </footer>
      </div>
    </Container>

  </>
)

export default Layout
