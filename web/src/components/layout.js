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
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label for="darkModeToggle" className="input_wrapper">
                  <span className="input_label">Dark Mode</span>
                  <input
                    id="darkModeToggle"
                    type="checkbox"
                    className="switch_4"
                    onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                  />
                  <div className="input_toggle">
                    <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                      <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                    </svg>
                    <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                      <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fill-rule="evenodd" clip-rule="evenodd" />
                    </svg>
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
