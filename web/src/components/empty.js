import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import '../styles/layout.css'
import { button } from './button.module.css'
import styles from './empty.module.css'

const Empty = () => (
  <>
    <div className={styles.root}>
      <h1>Uh ohh..</h1>
      <p>Page not found!</p>
      <svg width="512" height="320" viewBox="0 0 512 320" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><ellipse fillOpacity=".15" fill="#6E6E6E" fillRule="nonzero" cx="257.64" cy="261.03" rx="206.49" ry="13.67"/><path d="M249.72 111.38c-33.64 0-57.8 21.58-57.8 71.94 0 57.08 24.16 72.2 57.8 72.2 33.65 0 59.24-16.56 59.24-72.2 0-59.47-25.6-71.94-59.24-71.94zm.22 125.19c-23.3 0-35.47-13.67-35.47-53.2 0-34.9 12.67-53.29 35.97-53.29 23.3 0 35.98 12.09 35.98 53.28 0 38.54-13.17 53.2-36.48 53.2z" fill="#2F2E41" fillRule="nonzero"/><path d="M171.78 215.7h-13.91v-40.96a8.2 8.2 0 00-8.2-8.2h-3.26a8.2 8.2 0 00-8.2 8.2v40.96H98.96a4.68 4.68 0 01-4.14-6.87l41.52-78.6a8.2 8.2 0 00-3.75-11.25l-2.45-1.15a8.2 8.2 0 00-10.74 3.55l-50.64 94.74a11.12 11.12 0 009.81 16.37h59.62v25.9a9.83 9.83 0 009.84 9.83 9.83 9.83 0 009.83-9.83v-25.9h13.9a8.4 8.4 0 000-16.79zM429.35 215.7h-13.9v-40.96a8.2 8.2 0 00-8.21-8.2h-3.26a8.2 8.2 0 00-8.2 8.2v40.96h-39.24a4.68 4.68 0 01-4.14-6.87l41.53-78.6a8.2 8.2 0 00-3.75-11.25l-2.45-1.15a8.2 8.2 0 00-10.74 3.55l-50.65 94.74a11.12 11.12 0 009.81 16.37h59.63v25.9a9.83 9.83 0 0019.67 0v-25.9h13.9a8.4 8.4 0 000-16.79z" fill="#675AE8" fillRule="nonzero"/><path d="M175.62 210.9H161.7v-40.96a8.2 8.2 0 00-8.2-8.2h-3.27a8.2 8.2 0 00-8.2 8.2v40.96H102.8a4.68 4.68 0 01-4.14-6.87l41.53-78.6a8.2 8.2 0 00-3.75-11.24l-2.45-1.16a8.2 8.2 0 00-10.74 3.55L72.6 211.33a11.12 11.12 0 00-1.3 5.24h0c0 6.14 4.97 11.12 11.11 11.12h59.63v25.9a9.83 9.83 0 009.83 9.84h0c5.43 0 9.84-4.4 9.84-9.84v-25.9h13.9a8.4 8.4 0 008.4-8.4h0a8.4 8.4 0 00-8.4-8.39h0zM436.55 210.9h-13.91v-40.96a8.2 8.2 0 00-8.2-8.2h-3.26a8.2 8.2 0 00-8.2 8.2v40.96h-39.24a4.68 4.68 0 01-4.14-6.87l41.52-78.6a8.2 8.2 0 00-3.75-11.24l-2.45-1.16a8.2 8.2 0 00-10.74 3.55l-50.64 94.75a11.12 11.12 0 00-1.32 5.24h0c0 6.14 4.98 11.12 11.13 11.12h59.62v25.9c0 5.43 4.4 9.84 9.83 9.84h0c5.44 0 9.84-4.4 9.84-9.84v-25.9h13.9a8.4 8.4 0 008.4-8.4h0a8.4 8.4 0 00-8.4-8.39zM257.4 107.06c-33.65 0-57.8 21.58-57.8 71.95 0 57.08 24.15 72.19 57.8 72.19 33.64 0 59.23-16.55 59.23-72.2 0-59.47-25.59-71.94-59.23-71.94zm.22 125.19c-23.3 0-35.48-13.67-35.48-53.2 0-34.89 12.67-53.28 35.98-53.28 23.3 0 35.97 12.08 35.97 53.27 0 38.54-13.17 53.21-36.47 53.21h0z" stroke="#3F3D56"/><circle fill="#2F2E41" fillRule="nonzero" cx="230.43" cy="53.14" r="5.05"/><ellipse fill="#2F2E41" fillRule="nonzero" cx="242.75" cy="64.35" rx="14.17" ry="18.35"/><path d="M242.75 77.16c-7.1 0-12.98-6.76-14-15.58-.11.92-.17 1.85-.17 2.77 0 10.14 6.34 18.36 14.17 18.36 7.82 0 14.16-8.22 14.16-18.36 0-.92-.05-1.85-.16-2.77-1.03 8.82-6.9 15.58-14 15.58z" fill="#000" fillRule="nonzero" opacity=".1"/><path d="M271.57 118.1c-.3 1.25-1.61 2.25-3.07 2.95-3.05 1.47-6.82 1.91-10.47 2.06-.93.06-1.87.04-2.8-.05a8.04 8.04 0 01-4.8-2.2.66.66 0 01.02-1.12c1.95-2.14 5.2-3.45 8.46-4.4 2.48-.7 6.8-2.56 9.51-2.3 2.62.23 3.54 3.48 3.15 5.06z" fill="#3F3D56" fillRule="nonzero"/><path d="M271.57 118.1c-.3 1.25-1.61 2.25-3.07 2.95-3.05 1.47-6.82 1.91-10.47 2.06-.93.06-1.87.04-2.8-.05a8.04 8.04 0 01-4.8-2.2.66.66 0 01.02-1.12c1.95-2.14 5.2-3.45 8.46-4.4 2.48-.7 6.8-2.56 9.51-2.3 2.62.23 3.54 3.48 3.15 5.06z" fill="#000" fillRule="nonzero" opacity=".1"/><path d="M232.74 108.76a7.74 7.74 0 00-.47 5.9 10.31 10.31 0 003.46 4.9c3.95 3.16 9.39 3.6 14.45 3.55 4.44-.04 8.87-.34 13.27-.9 1.48-.14 2.93-.48 4.31-1a6.6 6.6 0 003.7-3.74c.58-1.7.16-3.78-1.23-4.92-1.23-1-2.92-1.14-4.5-1.23l-9.04-.54c.9-.9 2.08-1.42 3.17-2.08 1.44-.87 2.4-2.33 3.45-3.65a50.5 50.5 0 015.26-5.4c.3 1.68 1.36 3.06 2.62 4.23 1.25 1.16 2.7 2.1 4 3.2 3.17 2.7 5.45 6.34 8.77 8.82 2.29-.6 4.43-1.67 6.28-3.14l-1.29-2.34c-.1-.24-.27-.45-.49-.6-.36-.23-.83-.12-1.26-.18-1.13-.17-1.63-1.48-2.08-2.54-1.22-2.9-3.56-5.16-5.56-7.6a38.37 38.37 0 01-3.91-5.76c-.68-1.21-1.3-2.48-2.2-3.52a4.96 4.96 0 00-3.58-1.88c-1.23 0-2.36.62-3.41 1.25a90.22 90.22 0 00-9.25 6.3c-1.55 1.2-3.08 2.47-4.89 3.2-.76.31-1.57.52-2.3.9-1.28.66-2.25 1.77-3.3 2.76a21.94 21.94 0 01-13.98 6z" fill="#3F3D56" fillRule="nonzero"/><path d="M251.64 83.62a9.3 9.3 0 01-.68 3.14c-.42 1.01-1.24 1.8-2.26 2.18-.72.2-1.47.22-2.2.08a4.26 4.26 0 01-1.8-.62c-.84-.58-1.26-1.62-1.42-2.64-.15-1.01-.08-2.05-.18-3.07-.1-.83-.25-1.65-.47-2.45l-.2-.8a37.5 37.5 0 01-.34-1.55c-.03-.22-.07-.43-.09-.65a7.21 7.21 0 00-.32-1.88c-.17-.4-.4-.77-.66-1.12a8.27 8.27 0 01-.32-.48 2.3 2.3 0 01-.38-1.47 1.29 1.29 0 01.1-.32.7.7 0 00.48-.45c.04-.24.02-.48-.06-.7-.1-.31-.22-.61-.38-.9-.1-.18-.45-.52-.45-.73-.01-.43.83-.78 1.17-.95a6.57 6.57 0 013.37-.68c.74.05 1.55.28 1.96.9.37.56.32 1.3.48 1.95.02.1.06.18.12.26.08.07.18.12.29.13.18.04.37.04.55.02l.15-.02c.29-.05.56-.17.8-.34a4.98 4.98 0 01.48-.1c.61 1.94.7 4.03 1.2 6.01.25.99.6 1.96.66 2.98v.13c.01.33-.02.66 0 .98 0 .15.02.3.05.44.05.23.12.46.2.68v.01a3.36 3.36 0 01.1.38c.1.55.11 1.1.05 1.65z" fill="#FBBEBE" fillRule="nonzero"/><circle fill="#FBBEBE" fillRule="nonzero" cx="242.99" cy="63.61" r="7.27"/><path d="M289.13 103.21a11.92 11.92 0 00-2.05-5.52l.57 3.36c-.48.14-1-.02-1.32-.4-.3-.39-.54-.82-.69-1.29a26.41 26.41 0 00-3.21-5.76c-4.63-.39-9.2-2.3-13.27-4.54s-7.88-4.92-11.9-7.25c-.7-.42-1.42-.79-2.17-1.1-1.25-.5-2.66-.77-3.85-1.36a6.31 6.31 0 01-1-.64c-.13-.1-.25-.21-.37-.33a7.97 7.97 0 01-1.4-2.33c-.63-1.42-.86-3.12-1.5-4.54.3-.27.63-.5.98-.69l.16-.08a4.67 4.67 0 013.41-.22c1.02.35 1.87 1.03 2.72 1.68 1.38.97 2.71 2.02 3.97 3.15.7.67 1.35 1.4 2.1 2.02.63.48 1.3.92 1.98 1.31l12.26 7.3c1.38.83 2.77 1.65 4.12 2.52 2.05 1.33 4.04 2.76 6.01 4.2l3.5 2.53c.39.25.72.56 1 .92.24.41.39.87.43 1.34.3 1.92.13 3.88-.48 5.72z" fill="#FBBEBE" fillRule="nonzero"/><path d="M253.44 89.08c-.49 2.2-2.71 3.53-3.87 5.46-1.45 2.4-.86 5.19-.32 7.93l-2.97 2.56c-.55.47-1.1.94-1.68 1.36-.86.57-1.76 1.09-2.69 1.54l-2.63 1.35c-.81.46-1.68.83-2.57 1.1-1.73.44-3.57.13-5.28-.39-.2-.05-.4-.13-.57-.23a.94.94 0 01-.28-.25c-.17-.3-.23-.65-.17-1 .17-2.87.88-5.69 1.58-8.48.37-1.68.88-3.33 1.5-4.93a33.3 33.3 0 012.12-3.97c.88-1.6 1.92-3.11 3.1-4.5a7.23 7.23 0 001.45-1.86c.43-1 .27-2.14.35-3.23a6.7 6.7 0 011.32-3.48 902.06 902.06 0 001.76 4.08c.3.84.75 1.62 1.3 2.33a2.54 2.54 0 004.36-.34c.41-.73.71-1.53.89-2.35.24-1 .27-2.05.1-3.07-.3-1.96-1.13-3.96-1.74-5.78a5.85 5.85 0 01-.42-1.91c0-.07 0-.15.02-.22l.01-.06a4.67 4.67 0 011.25-.38l1.6 8.66.04.2a53.73 53.73 0 00.5 2.36v.01l.1.38c.1.34.2.68.32 1.01.72 2 1.98 4.02 1.52 6.1z" fill="#675AE8" fillRule="nonzero"/><path d="M282.93 119.98c-.02.43.06.85.24 1.23.46.83 1.55 1.02 2.5 1.1 5.51.45 11.06.28 16.54-.5.3-.02.58-.11.84-.27.78-.54.3-1.87-.55-2.3-.85-.42-1.86-.32-2.8-.5a8.8 8.8 0 01-2.6-1.14 132.6 132.6 0 01-5.6-3.4c-1.1-.7-2.39-1.45-3.62-1.04-3.34 1.13-4.97 3.22-4.95 6.82z" fill="#3F3D56" fillRule="nonzero"/><path d="M242.27 78.49l-.03.15a30.42 30.42 0 01-.6 2.59 72.37 72.37 0 01-2.17 6.3l-6.33 16.68c-.53 1.4-1.06 2.8-1.67 4.17l-.61 1.38a19.25 19.25 0 00-1.7 5.16 10.75 10.75 0 00-.07 3.54c.24 1.16.94 2.3 2.05 2.73.54.2 1.31.49 1.16 1.05-.08.3-.43.46-.74.51-.84.13-1.7-.11-2.34-.67-.59-.53-1.04-1.34-1.82-1.43-.55-.06-1.05.27-1.55.5-2.03.92-4.39.28-6.52-.38.17-.87 1.03-1.44 1.9-1.6.85-.18 1.74-.06 2.62-.08.28.01.56-.06.8-.2.22-.2.37-.46.43-.74.57-1.68.99-3.4 1.26-5.15.28-1.83.4-3.68.8-5.49.32-1.4.8-2.77 1.22-4.15.8-2.85 1.47-5.73 1.98-8.64.26-1.21.45-2.44.56-3.67.07-1.02.04-2.05.14-3.07.16-1.32.44-2.63.82-3.91l1.13-4.19c.56-2.06 1.16-4.2 2.57-5.8a5.47 5.47 0 013.93-1.88 3.89 3.89 0 01.97.12c.3.08.58.2.85.36.44-.28.66-.18.95.24.25.46.37.97.34 1.49.03 1.37-.08 2.73-.33 4.08z" fill="#FBBEBE" fillRule="nonzero"/><path d="M242.75 80.12l-.02.02-.1.1-1 .99-.48-2.04-1.66-7c.28 0 .56.04.83.1l.06-.24.08.27.56 1.92 1.07 3.65.18.6.48 1.63z" fill="#675AE8" fillRule="nonzero"/><path d="M249.03 57.82a4.93 4.93 0 01-4.93 4.93h-5.9a4.93 4.93 0 010-9.85h5.9c2.72 0 4.92 2.2 4.93 4.92z" fill="#2F2E41" fillRule="nonzero"/><circle fill="#2F2E41" fillRule="nonzero" cx="254.57" cy="53.14" r="5.05"/><path d="M254.45 48.1h-.19a5.05 5.05 0 010 10.09h.19a5.05 5.05 0 100-10.1zM230.43 48.1h.18a5.05 5.05 0 000 10.09h-.18a5.05 5.05 0 010-10.1zM247.05 61.77a4.9 4.9 0 01-2.95.98h-5.9a4.9 4.9 0 01-2.96-.98h11.81z" fill="#000" fillRule="nonzero" opacity=".1"/><path d="M285.21 98.36s1.27 3.67 2.44 2.7l-.93-4.8-1.5 2.1z" fill="#FBBEBE" fillRule="nonzero"/><path d="M440.14 210.23a8.15 8.15 0 101.08-15.62l.2 4.2-1.98-3.6a8.12 8.12 0 00-4.65 6.8 8.15 8.15 0 005.35 8.22z" fill="#57B894" fillRule="nonzero"/><path d="M449.96 258.87c-.7-3.57 2.33-6.73 5.33-8.78 3-2.06 6.5-4.08 7.52-7.57 1.47-5-2.9-9.6-6.32-13.56a49.05 49.05 0 01-6.46-9.6 13.23 13.23 0 01-1.55-4.38c-.27-2.22.44-4.43 1.16-6.55a473.8 473.8 0 017.69-21" stroke="#3F3D56"/><path d="M440.48 209.15a8.15 8.15 0 101.08-15.62l.2 4.2-1.98-3.6a8.12 8.12 0 00-4.65 6.8 8.15 8.15 0 005.35 8.22z" stroke="#3F3D56"/><path d="M448.96 185.98a8.14 8.14 0 015.86-5.17l.68 3.99 1.24-4.19a8.15 8.15 0 11-7.78 5.37z" fill="#57B894" fillRule="nonzero"/><path d="M449.4 184.54a8.14 8.14 0 015.87-5.17l.67 3.99 1.25-4.19a8.15 8.15 0 11-7.78 5.37h0z" stroke="#3F3D56"/><path d="M455.06 229.05a8.15 8.15 0 007.21-14.5l-.95 3.22-.68-4.03-.02-.01a8.15 8.15 0 10-5.56 15.32z" fill="#57B894" fillRule="nonzero"/><path d="M455.45 227.59a8.15 8.15 0 007.21-14.5l-.95 3.22-.68-4.03H461a8.15 8.15 0 10-5.56 15.3h0z" stroke="#3F3D56"/><path d="M446.58 242.57a8.14 8.14 0 101.57-6.37l3.63 5.46-4.96-2.9a8.07 8.07 0 00-.24 3.81z" fill="#57B894" fillRule="nonzero"/><path d="M446.92 241.5a8.14 8.14 0 101.57-6.38l3.63 5.46-4.96-2.9a8.07 8.07 0 00-.24 3.82z" stroke="#3F3D56"/><path d="M49.53 230.08a5.35 5.35 0 10.7-10.27l.14 2.76-1.3-2.36a5.33 5.33 0 00-3.06 4.46 5.35 5.35 0 003.52 5.41z" fill="#57B894" fillRule="nonzero"/><path d="M55.98 262.03c-.46-2.34 1.53-4.42 3.5-5.77 1.97-1.35 4.27-2.67 4.94-4.96.97-3.3-1.9-6.31-4.15-8.91a32.23 32.23 0 01-4.25-6.32 8.7 8.7 0 01-1.01-2.87c-.18-1.46.29-2.91.76-4.3a311.3 311.3 0 015.05-13.8" stroke="#3F3D56"/><path d="M49.75 229.37a5.35 5.35 0 10.7-10.26l.14 2.75-1.3-2.36a5.33 5.33 0 00-3.06 4.46 5.35 5.35 0 003.52 5.41z" stroke="#3F3D56"/><path d="M55.32 214.14c.62-1.71 2.08-2.99 3.85-3.39l.44 2.62.82-2.75a5.35 5.35 0 11-5.1 3.52z" fill="#57B894" fillRule="nonzero"/><path d="M55.62 213.2c.62-1.72 2.07-3 3.85-3.4l.44 2.62.82-2.75a5.35 5.35 0 11-5.11 3.53h0z" stroke="#3F3D56"/><path d="M59.33 242.44a5.35 5.35 0 004.74-9.52l-.63 2.11-.44-2.65h-.02a5.35 5.35 0 10-3.65 10.06z" fill="#57B894" fillRule="nonzero"/><path d="M59.59 241.48a5.35 5.35 0 004.73-9.52l-.62 2.11-.45-2.65h-.01a5.35 5.35 0 00-3.65 10.06h0z" stroke="#3F3D56"/><path d="M53.76 251.33a5.35 5.35 0 101.03-4.2l2.39 3.6-3.26-1.9a5.3 5.3 0 00-.16 2.5z" fill="#57B894" fillRule="nonzero"/><path d="M53.98 250.62a5.35 5.35 0 101.03-4.2l2.39 3.6-3.26-1.9a5.3 5.3 0 00-.16 2.5h0z" stroke="#3F3D56"/><ellipse fill="#2F2E41" fillRule="nonzero" cx="234.27" cy="170.92" rx="6.65" ry="8.61"/><ellipse fill="#2F2E41" fillRule="nonzero" cx="270.48" cy="171.11" rx="6.65" ry="8.61"/><path d="M265.39 196.56c0 3.89-5.44 7.05-12.14 7.05s-12.13-3.16-12.13-7.05c0-3.37 4.07-6.19 9.52-6.88a19.85 19.85 0 016.97.3c4.55 1.02 7.78 3.58 7.78 6.58z" fill="#2F2E41" fillRule="nonzero"/><ellipse stroke="#3F3D56" cx="235.83" cy="168.96" rx="6.65" ry="8.61"/><ellipse stroke="#3F3D56" cx="272.04" cy="169.16" rx="6.65" ry="8.61"/><ellipse stroke="#3F3D56" cx="254.82" cy="194.6" rx="12.14" ry="7.05"/><path d="M257.75 190.57c0 .5-.18.97-.51 1.33a1.7 1.7 0 01-1.25.55h-3.91c-1-.04-1.8-.88-1.76-1.88 0-.38.1-.76.32-1.07a18.66 18.66 0 016.97.32c.1.24.15.5.14.75z" fill="#FFF" fillRule="nonzero"/><circle fill="#FFF" fillRule="nonzero" cx="235.83" cy="166.61" r="1.96"/><circle fill="#FFF" fillRule="nonzero" cx="272.24" cy="166.61" r="1.96"/><circle fill="#675AE8" fillRule="nonzero" opacity=".3" cx="274.2" cy="185.01" r="1.96"/><circle fill="#675AE8" fillRule="nonzero" opacity=".3" cx="226.44" cy="185.01" r="1.96"/></g></svg>
      <AniLink fade duration={0.25} className={ button } to={`/`}>Back to Home</AniLink>
      <link></link>
    </div>
  </>
)

export default Empty
