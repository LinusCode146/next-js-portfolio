import React from "react";
import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {


    return (
        <main className={styles.container}>
            <div><span><Link href={'/'}>Portfolio</Link></span></div>
            <ul>
                <li>
                    <Link href='/'>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href='/projects'>
                        <span>Projects</span>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <span>About Me</span>
                    </Link>
                </li>
            </ul>
        </main>

    )
}