import React from "react";
import Link from "next/link";
import styles from './Header.module.css';
import ButtonHeader from "@/components/ButtonHeader";

export default function Header() {


    return (
        <main className={styles.container}>
            <div><span><Link href={'/'}>Portfolio</Link></span></div>
            <ul>
                <li>
                    <Link href={'/'}>
                        <ButtonHeader color={'red'} title={'Home'} />
                    </Link>
                </li>
                <li>
                    <Link href={'/projects'}>
                        <ButtonHeader color={'red'} title={'Projects'} />
                    </Link>
                </li>
                <li>
                    <Link href={'/contact'}>
                        <ButtonHeader color={'red'} title={'Contact'} />
                    </Link>
                </li>
            </ul>
        </main>

    )
}