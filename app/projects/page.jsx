"use client"

import ProjectCard from "@/components/ProjectCard";
import styles from './page.module.css'

export default function ProjectPage() {

    return (
        <>
            <div className={styles.fillHeaderContent}></div>
            <main className={styles.container}>
                <div className={styles.flexArea}>
                    <div className={styles.projectRow}>
                        <ProjectCard link={'https://github.com/LinusCode146/Sudoku_Solver/blob/main/SudokuSolver.py'}
                                     title={'Sudoku Solver'} content={'aa'} imageSrc={'/github-icon.png'}/>
                        <ProjectCard link={'https://github.com/LinusCode146/EnergieAmpel'} title={'Energie Ampel'}
                                     content={'aa'} imageSrc={'/github-icon.png'}/>
                    </div>
                    <div className={styles.projectRow}>
                        <ProjectCard link={'https://github.com/LinusCode146/next-js-portfolio'} title={'This Portfolio'}
                                     content={'aa'} imageSrc={'/github-icon.png'}/>
                        <ProjectCard
                            link={'https://github.com/LinusCode146/ChessUI/tree/main/Finns%20Geburtstag%20Geschenk'}
                            title={'Chess GUI'} content={'aa'} imageSrc={'/github-icon.png'}/>
                    </div>
                    <div className={styles.projectRow}>
                        <ProjectCard link={'https://github.com/LinusCode146/ChessComAPI'} title={'Chess.com API'}
                                     content={'aa'} imageSrc={'/github-icon.png'}/>
                        <ProjectCard link={'https://github.com/LinusCode146/AdventOfCode_2022'}
                                     title={'Advent of Code 2022'} content={'aa'} imageSrc={'/github-icon.png'}/>
                    </div>
                </div>
                <div className={styles.glassBall1}></div>
                <div className={styles.glassBall2}></div>
                <div className={styles.glassBall3}></div>
            </main>
        </>
    )
}