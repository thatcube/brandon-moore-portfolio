import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'

import styles from './header.module.css'
import { button } from './button.module.css'

const active = {
  color: 'var(--color-text-dark)'
}

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <AniLink fade duration={0.5} to='/'>Brandon Moore</AniLink>
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
            <AniLink fade duration={0.5} to='/' activeStyle={active} title="Work">Work</AniLink>
          </li>
          <li>
            <AniLink fade duration={0.5} to='/about/' activeStyle={active} title="About">About</AniLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
