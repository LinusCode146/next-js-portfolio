"use client"

import styles from './ButtonHeader.module.css'
import '../app/globals.css';

export default function ButtonHeader ({title, color}) {


    return (
        <div className={styles.container}>
            <div><span>{title}</span></div>
        </div>
    )
}