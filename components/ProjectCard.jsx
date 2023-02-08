
import styles from './ProjectCard.module.css';
import Link from "next/link";

//TODO: fetch projects from database incase i want to add some later


export default function ProjectCard ({title, imageSrc, link, visitible}) {

    visitible = visitible ? visitible : false

    return (
        <div className={styles.mainContainer}>
            <div className={styles.card}>
                <div className={styles.front}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.back}>
                    {!visitible && <Link href={link}>
                        <img src={imageSrc} alt='nextjs image' className={styles.gitImage}/>
                    </Link>}

                    {visitible &&
                        <>
                        <Link href={link}>
                            <img src={imageSrc} alt='nextjs image' className={styles.gitImageSmall}/>
                        </Link>
                        <Link href={visitible}>
                            <img src={'/website-hosting-icon.png'} className={styles.visitible}/>
                        </Link>
                        </>}

                </div>
            </div>
        </div>

    )
}