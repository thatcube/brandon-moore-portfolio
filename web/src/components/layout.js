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
    <div className={styles.content}>{children}</div>
    <div className={styles.footerWrapper}>
      <Container>
        <footer className={styles.footer}>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <a className="link__light" target="_blank" href="https://www.linkedin.com/in/bmoore46/">LinkedIn</a>
                </li>
                <li>
                  <a className="link__light" target="_blank" href="https://docs.google.com/document/d/1eYQDi11GeTIo30D9yK7Mw17uhCRexPD26naHEPob2_A/edit?usp=sharing">Resume</a>
                </li>
                <li>
                  hi@brandonmoore.io
              </li>
              </ul>
            </div>
            <div className="col-6">
              <p>
                Designed and built by me. Copyright whenever, this is <a className="link__light" target="_blank" href="https://github.com/thatcube/brandon-moore-portfolio">open source</a>.
            </p>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  </>
)

export default Layout
