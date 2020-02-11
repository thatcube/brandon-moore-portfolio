import React from 'react'
import Header from './header'
import Container from '../components/container'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

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
          <div className="col-1-start col-4-end">
            <p>This site was designed and built by me. You can check out the code <a className="link" target="_blank" href="https://github.com/thatcube/brandon-moore-portfolio">here</a>.</p>
          </div>
          <div className="col-4-start col-9-end">
            <ul>
              <li><a className="link" target="_blank" href="https://www.linkedin.com/in/bmoore46/">LinkedIn</a></li>
              <li>&nbsp; · &nbsp;</li>
              <li><a className="link" target="_blank" href="https://www.canva.com/design/DADt7gwJnKc/BVEhOXDTfZsZ78jSei0CJQ/view?utm_content=DADt7gwJnKc">Resume</a></li>
              <li>&nbsp; · &nbsp;</li>
              <li>brandoncmoore4@gmail.com</li>
            </ul>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label htmlFor="darkModeToggle" className="input_wrapper">
                  <span className="input_label">Dark Mode</span>
                  <input
                    id="darkModeToggle"
                    type="checkbox"
                    className="sr-only"
                    onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                  />
                  <div className="input_toggle">
                    <svg className="is_checked" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M30 53.9L18.43 42.33a3.32 3.32 0 10-4.7 4.7l13.94 13.94c1.3 1.3 3.4 1.3 4.7 0L67.63 25.7a3.32 3.32 0 10-4.7-4.7L30 53.9z" fill="#FFF" fillRule="nonzero"/></svg>
                    <svg className="is_unchecked" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M61 19a3.3 3.3 0 00-4.7 0L40 35.3 23.7 19a3.3 3.3 0 10-4.7 4.7L35.3 40 19 56.3a3.3 3.3 0 104.7 4.7L40 44.7 56.3 61a3.3 3.3 0 104.7-4.7L44.7 40 61 23.7a3.3 3.3 0 000-4.7z" fill="#FFF" fillRule="nonzero"/></svg>
                  </div>
                  {' '}
                </label>
              )}
            </ThemeToggler>
          </div>

        </Container>
      </footer>
    </div>
  </>
)

export default Layout
