import React from 'react'
import Header from './header'
import Container from '../components/container'

import '../styles/normalize.css'
import '../styles/layout.css'
import '../styles/global.css'

import style from '../components/social.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div>{children}</div>
    <div className="light-boi">
      <footer className={style.social}>
        <Container>
          <div className="col-1-start col-5-end">
            <p>This site was designed and built by me. </p>
            <p>Copyright whenever, this is <a target="_blank" href="https://github.com/thatcube/brandon-moore-portfolio">open source</a>.
            </p>
          </div>
          <div className="col-6-start col-9-end">
            <ul>
              <li><a target="_blank" href="https://www.linkedin.com/in/bmoore46/">LinkedIn</a></li>
              <li>&nbsp; · &nbsp;</li>
              <li><a target="_blank" href="https://www.canva.com/design/DADt7gwJnKc/BVEhOXDTfZsZ78jSei0CJQ/view?utm_content=DADt7gwJnKc">Resume</a></li>
              <li>&nbsp; · &nbsp;</li>
              <li>brandoncmoore4@gmail.com</li>
            </ul>
          </div>
        </Container>
      </footer>
    </div>
  </>
)

export default Layout
