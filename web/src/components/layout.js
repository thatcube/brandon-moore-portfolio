import React from 'react'
import Header from './header'
import Container from '../components/container'

import '../styles/layout.css'
import '../styles/global.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap" rel="stylesheet"></link>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Archivo:400,500,600,700&display=swap" rel="stylesheet"></link>
    <div className={styles.content}>{children}</div>

    <Container>
      <div className={styles.footerWrapper}>
        <footer className={styles.footer}>
          <div className="row center-v">
            <div className="col">
              <ul>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/bmoore46/">LinkedIn</a>
                </li>
                <li>
                  <a target="_blank" href="https://www.canva.com/design/DADt7gwJnKc/BVEhOXDTfZsZ78jSei0CJQ/view?utm_content=DADt7gwJnKc">Resume</a>
                </li>
                <li>
                  brandoncmoore4@gmail.com
              </li>
              </ul>
            </div>
            <div className="col">
              <p>
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
