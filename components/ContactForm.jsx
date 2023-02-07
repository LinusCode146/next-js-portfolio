"use client"

import styles from './ContactForm.module.css'
import {useState} from "react";

export default function ContactForm() {
    const [clientName, setClientName] = useState('')
    const [message, setMessage] = useState('')

    function submitHandler(e) {
        e.preventDefault()

        console.log('submitted')
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={submitHandler}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className={styles.nameContainer}>
                    <input className={styles.FirstNameInput} type="text" placeholder={'First Name'}/>
                    <input className={styles.LastNameInput} type="text" placeholder={'Last Name'}/>
                </div>
                <div className={styles.EmailContainer}>
                    <input className={styles.EmailInput} type="email" placeholder={'Your Email'}/>
                </div>
                <div className={styles.MessageContainer}>
                    <textarea className={styles.MessageInput} placeholder={'Your Message'}/>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.submitButton} type="submit"><span>Submit</span></button>
                </div>
            </form>
        </div>
    )
}