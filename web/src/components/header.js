import { Link } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'
import Headroom from 'react-headroom'

import styles from './header.module.css'
import { button } from './button.module.css'

const active = {
  color: 'var(--color-text-inverted)',
  background: 'var(--color-background-inverted)'
}

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <Headroom>
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to='/'>
            <svg aria-labelledby="logoTitle" width="40" height="40" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <title id="logoTitle">Brandon Moore's portfolio logo</title>
              <path d="M22 2a20 20 0 110 40 20 20 0 010-40zm0 8a12 12 0 00-12 12c16 4.4 24 4.4 24 0a12 12 0 00-12-12z" fill="currentColor" fillRule="evenodd" /></svg>
          </Link>
        </div>
        <div className={styles.toggleNavButton}>
          {/* <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}> */}
          <button className={button} onClick={showNav ? onHideNav : onShowNav}>
            {/* <Icon symbol='hamburger' /> */}
            Menu
      </button>
        </div>
        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            <li>
              <Link to='/' activeStyle={active} title="Work">Work</Link>
            </li>
            <li>
              <Link to='/about' activeStyle={active} title="About">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </Headroom>
)

export default Header
