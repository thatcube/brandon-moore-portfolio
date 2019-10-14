import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <ul>
          <li>
            <a target="_blank" href="https://dribbble.com/ThatCube">
              <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><g transform="translate(8 8)" stroke="#979797" strokeWidth="4"><circle cx="32" cy="32" r="30" /><path d="M43.76 58.9A86.67 86.67 0 0020.81 4.95M2.33 28.14c7.71.02 13.25-.15 16.61-.5a77.59 77.59 0 0015.09-3.36 39.74 39.74 0 0013.26-7.62A22.14 22.14 0 0052.46 10" /><path d="M11.75 54.99a44.65 44.65 0 0114.46-17.27c2.58-1.85 7.1-4.6 15.77-5.3 2.96-.24 9.64-.24 20.05 0" /></g><path d="M40 8a32 32 0 110 64 32 32 0 010-64zm4.9 35.16l-.45.1a24.3 24.3 0 00-9.07 4.09A42.58 42.58 0 0022.55 61.9 27.88 27.88 0 0040 68c3.42 0 6.7-.61 9.72-1.73a84.7 84.7 0 00-4.83-23.11zm6.61-.83l-.23.01-.8.05-.91.07-.66.07a88.64 88.64 0 014.69 21.95 28 28 0 0014.27-21.73l.03-.37a301.1 301.1 0 00-16.39-.05zm-10.24-7.71l-.22.07a76.49 76.49 0 01-13.9 2.94c-2.77.29-6.92.45-12.47.5h-.6l-1.86.01h-.16a27.9 27.9 0 007.46 20.96 46.57 46.57 0 0113.52-15 28.23 28.23 0 0110.39-4.71 83.5 83.5 0 00-2.16-4.77zM60.84 21.3l-.08.13a23.78 23.78 0 01-4.15 4.74 42.1 42.1 0 01-11.54 7.12 87.47 87.47 0 012.39 5.38c.76-.1 1.54-.18 2.36-.24 2.6-.21 7.82-.24 15.74-.1l.56.01 1.83.04c-.37-6.55-3-12.5-7.1-17.08zM12.61 34.14c5.45-.01 9.66-.13 12.6-.36l.33-.02.62-.06.57-.05A72.16 72.16 0 0039.39 31c-3.3-6-7.35-11.6-12.05-16.7l.44.49a28.05 28.05 0 00-15.17 19.34zM40 12a28 28 0 00-8.25 1.24A89.08 89.08 0 0143.24 29.7a38.04 38.04 0 0010.73-6.55 19.88 19.88 0 003.93-4.69A27.89 27.89 0 0040 12z" fill="currentColor" fillRule="nonzero" /></g></svg>
              <span>Dribbble</span></a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/bmoore46/"><svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><g stroke="#000" strokeWidth="4"><path d="M58.063 57.81V45.843c0-6.947-3.6-10.863-8.368-10.863a10.105 10.105 0 00-4.674 1.042l-1.358.695-.758-1.327a.19.19 0 00-.158-.094H36.4c-.126 0-.19.094-.19.19V57.81c0 .126.064.22.19.22h6.853a.216.216 0 00.22-.22V46.347c0-1.99 1.58-3.694 3.6-3.726h.064a3.632 3.632 0 013.6 3.695v11.526c0 .126.095.221.22.221h6.885c.095 0 .221-.126.221-.252z" /><path d="M22.947 58.158h6.316c.19 0 .316-.158.316-.316V35.58c0-.19-.126-.316-.316-.316h-6.316a.316.316 0 00-.315.316v22.263c0 .158.126.316.315.316z" strokeLinejoin="round" /><path d="M26.105 30.305h-.063a3.79 3.79 0 11.158 0h-.095 0z" /><path d="M42.526 10h-22.42C14.523 10 10 14.524 10 20.105v39.79C10 65.475 14.524 70 20.105 70h6.316m13.895 0h19.579C65.475 70 70 65.476 70 59.895v-39.79C70 14.525 65.476 10 59.895 10h-4.106" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M22.947 60.158h6.316a2.315 2.315 0 002.316-2.316V35.58a2.297 2.297 0 00-2.316-2.316h-6.316a2.316 2.316 0 00-2.315 2.316v22.263c0 1.244 1 2.316 2.315 2.316zM42.527 8a2 2 0 01.149 3.995l-.15.005h-22.42a8.105 8.105 0 00-8.102 7.857l-.004.248v39.79a8.105 8.105 0 007.857 8.101l.248.004h6.316a2 2 0 01.15 3.995l-.15.005h-6.316c-6.584 0-11.94-5.257-12.101-11.802L8 59.895v-39.79c0-6.584 5.257-11.94 11.802-12.101L20.105 8h22.421zm17.368 0c6.584 0 11.94 5.257 12.101 11.802l.004.303v39.79c0 6.584-5.257 11.94-11.802 12.101l-.303.004h-19.58a2 2 0 01-.148-3.995l.149-.005h19.579a8.105 8.105 0 008.101-7.857l.004-.248v-39.79a8.105 8.105 0 00-7.857-8.101L59.895 12h-4.106a2 2 0 01-.149-3.995L55.79 8h4.105zm-10.2 24.979c6.096 0 10.24 5 10.365 12.51l.003.353v11.969c0 1.136-.893 2.16-2.06 2.246l-.16.006h-6.885a2.215 2.215 0 01-2.216-2.062l-.005-.159V46.281a1.632 1.632 0 00-1.444-1.65l-.156-.01h-.032c-.844.013-1.553.711-1.625 1.58l-.006.146v11.464a2.215 2.215 0 01-2.062 2.215l-.16.006H36.4c-1.277 0-2.114-.978-2.185-2.072l-.004-.15V35.485c0-1.111.835-2.1 2.025-2.184l.164-.005h6.413a2.187 2.187 0 011.49.655l.124.139.386-.17a12.034 12.034 0 014.882-.94zm-22.116 4.284v18.895h-2.947V37.263h2.947zm22.076-.284a8.1 8.1 0 00-3.409.676l-.314.147-3.058 1.564-1.184-2.071h-3.48v18.737h3.264v-9.685c0-3.019 2.349-5.554 5.377-5.718l.223-.008h.08a5.632 5.632 0 013.985 1.701 5.621 5.621 0 011.596 3.719l.002.275v9.747h3.326v-10.22c0-5.66-2.594-8.864-6.408-8.864zM26.121 20.727a5.79 5.79 0 015.79 5.73c.032 3.173-2.496 5.782-5.711 5.848H26a5.79 5.79 0 01.121-11.578zm0 4c-.981 0-1.78.79-1.79 1.771-.01.98.772 1.787 1.711 1.807h.116a1.79 1.79 0 00-.037-3.578z" fill="currentColor" fillRule="nonzero" /></g></svg><span>LinkedIn</span></a>
          </li>
          <li>
            <a href="mailto:brandoncmoore4@gmail.com">
              <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M57.04 8a2 2 0 012 1.85V24.47l6.92 6.95.19.19c.83.86 1.3 2 1.36 3.23v32.02a5.14 5.14 0 01-4.88 5.13l-.25.01H17.14A5.14 5.14 0 0112 67.08V35.04c.02-1.27.5-2.49 1.33-3.38l.17-.18 7.3-7.6V10a2 2 0 011.85-2h34.39zM46.39 54.28H33.12L18.9 68h41.74L46.39 54.28zm17.13-15.52L50.14 52.34l13.38 12.9V38.75zm-47.52 0v26.47l13.38-12.89L16 38.76zM55.04 12H24.8v29.99l8.16 8.3h13.6l8.48-8.62V12zM51.8 30.36c0 2.98-2.66 5.2-5.45 5.2a5.21 5.21 0 01-3.06-.93l-.2-.15-.23.15c-.88.6-1.92.93-2.95.93-2.49 0-5.3-2.24-5.3-5.2 0-3.03 2.6-5.4 5.3-5.4 2.58 0 5.16 2.2 5.29 5v.38c.05.92.41 1.22 1.15 1.22.72 0 1.45-.6 1.45-1.2 0-4.42-3.3-8.1-8.24-8a8.06 8.06 0 00-7.55 7.75c-.25 3.84 3.61 8.05 7.43 8.05 1.63 0 2.85-.28 3.72-.8l.18-.12.14-.08a2 2 0 012.1 3.4c-1.62 1.09-3.66 1.6-6.14 1.6-6.06 0-11.65-6-11.44-12l.01-.26.02-.3A12.07 12.07 0 0139.4 18.36a11.82 11.82 0 0112.41 11.99zm-31.02-.7l-4.01 4.18 4.02 4.08v-8.26zm38.25.48v7.47l3.7-3.76-3.7-3.7zm-19.12-1.18c-.57 0-1.3.67-1.3 1.4 0 .53.85 1.2 1.3 1.2.55 0 1.21-.5 1.29-1.25V30.07c-.09-.53-.78-1.1-1.3-1.1z" fill="currentColor" fillRule="nonzero" /></svg>
              <span>Email</span></a>
          </li>
          <li>
            <a target="_blank" href="/"><svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M26.94 55.71H54.7a2 2 0 01.15 4H26.94a2 2 0 01-.15-4H54.7 26.94zM46.98 8c.7.01 1.38.27 1.9.73l.15.14L64.75 24.6c.5.5.82 1.16.88 1.88v37.47a8.06 8.06 0 01-7.8 8.06H24.06A8.06 8.06 0 0116 64.18V16.06A8.06 8.06 0 0123.82 8h23.16zm-1.3 4H24.06A4.06 4.06 0 0020 15.86V63.94A4.06 4.06 0 0023.86 68h33.71a4.06 4.06 0 004.06-3.86V27.96H52.8a7.1 7.1 0 01-7.1-6.87v-.24L45.67 12zm-.87 33.7a2 2 0 01.15 4H26.94a2 2 0 01-.15-4H44.8zM32.78 29.38c5 0 7.73 3.2 7.8 8.77a2 2 0 11-4 .06c-.04-3.52-1.16-4.83-3.8-4.83-2.66 0-3.8 1.32-3.84 4.83a2 2 0 01-4-.06c.07-5.56 2.83-8.77 7.84-8.77zm-.04-11.71a5.67 5.67 0 110 11.34 5.67 5.67 0 010-11.34zm0 4a1.67 1.67 0 100 3.34 1.67 1.67 0 000-3.34zm16.94-6.5v5.68a3.1 3.1 0 002.93 3.1h5.85l-8.78-8.77z" fill="currentColor" fillRule="nonzero" /></svg><span>Resume</span></a>
          </li>
        </ul>
        <div className={styles.siteInfo}>
          Copyright whenever, this is <a target="_blank" href="https://github.com/thatcube/brandon-moore-portfolio">open source</a>.
        </div>
      </div>
    </footer>
  </>
)

export default Layout
