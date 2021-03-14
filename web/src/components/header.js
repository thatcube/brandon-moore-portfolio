import { Link } from "gatsby";
import TransitionLink from 'gatsby-plugin-transition-link';
import React from "react";
import { cn } from "../lib/helpers";
import Headroom from "react-headroom";

import styles from "./header.module.css";


const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <Headroom>
    <header  className={styles.root}>
      <nav className={styles.wrapper}>
        <div className={styles.logo}>
          <Link activeClassName="active-home" to="/">
            <span className="sr-only">Home</span>
            <svg
              className="logo"
              aria-labelledby="logoTitle"
              width="40"
              height="40"
              viewBox="0 0 44 44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="logoTitle">Brandon Moore's portfolio logo</title>
              <path
                d="M22 2a20 20 0 110 40 20 20 0 010-40zm0 8a12 12 0 00-12 12c16 4.4 24 4.4 24 0a12 12 0 00-12-12z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className={styles.nav}>
          <ul>
            <li onClick={showNav ? onHideNav : onShowNav}>
              <button className={styles.projectToggle} title="Work">
                Work
                <svg width="24" height="24" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="1.8" d="M16 10l-4 4-4-4" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </button>
              <nav className={cn(styles.projectNav, showNav && styles.showNav)}>
                <ul>
                  <li>
                    <Link to="/get" activeClassName="active-page" title="GET">
                      GET App Redesign
                    </Link>
                  </li>
                  <li>
                    <Link to="/aqua" activeClassName="active-page" title="GET">
                      Aqua Design System
                    </Link>
                  </li>
                  <li>
                    <Link to="/patient" activeClassName="active-page" title="GET">
                      Patient App
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
            <li>
              <Link to="/about" activeClassName="active-page" title="About">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </Headroom>
);

export default Header;
