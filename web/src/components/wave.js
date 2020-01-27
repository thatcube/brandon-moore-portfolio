import React from 'react'
import styles from './wave.module.css'

const Wave = () => (
    <>
        <svg className={styles.top} viewBox="0 0 1440 46" xmlns="http://www.w3.org/2000/svg"><path d="M0 25.02V0h1440v25.02c-120-13.99-240-20.98-360-20.98s-240 7-360 20.98l-10.5 1.05c-82.23 8.18-144.53 13.4-186.9 15.65l-1.34.07A3093 3093 0 01360 46C240 46 120 39 0 25.02z" fillRule="nonzero" /></svg>

        <svg className={styles.bottom} viewBox="0 0 1440 46" xmlns="http://www.w3.org/2000/svg"><path d="M1440 20.98V46H0V20.98c120 13.99 240 20.98 360 20.98s240-7 360-20.98l10.5-1.05c82.23-8.18 144.53-13.4 186.9-15.65l1.34-.07A3093 3093 0 011080 0c120 0 240 7 360 20.98z" fill-rule="nonzero"/></svg>

    </>
)

export default Wave
