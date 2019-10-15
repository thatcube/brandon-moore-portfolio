import { Link } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'

import styles from './header.module.css'
import { button } from './button.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>Brandon Moore</Link>
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
            <Link to='/'>Work</Link>
          </li>
          <li>
            <Link to='/about/'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
