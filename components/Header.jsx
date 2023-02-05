import React from "react";
import Link from "next/link";

export default function Header() {


    return (
        <main>
            <span>Portfolio</span>
            <ul>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/projects'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        About Me
                    </Link>
                </li>
            </ul>
        </main>

    )
}