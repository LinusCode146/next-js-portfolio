
import styles from './ProjectCard.module.css';


export default function ProjectCard ({title, content, imageSrc}) {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.card}>
                <div className={styles.front}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.back}>
                    <img src={imageSrc} alt='nextjs image' className={styles.nextImage}/>
                </div>
            </div>
        </div>

    )
}