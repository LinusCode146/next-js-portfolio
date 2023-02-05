"use client"

import ProjectCard from "@/components/ProjectCard";
import styles from './page.module.css'

export default function ProjectPage() {

    return (

        <main className={styles.container}>
            <div className={styles.projectRow}>
                <ProjectCard title={'Sudoku Solver'} content={'aa'} imageSrc={'/github-icon.png'}/>
                <ProjectCard title={'Energie Ampel'} content={'aa'} imageSrc={'/github-icon.png'} />
            </div>
            <div className={styles.projectRow}>
                <ProjectCard title={'This portfolio'} content={'aa'} imageSrc={'/github-icon.png'} />
                <ProjectCard title={'Chess GUI'} content={'aa'} imageSrc={'/github-icon.png'}/>
            </div>
            <div className={styles.glassBall1}></div>
            <div className={styles.glassBall2}></div>
        </main>
    )
}