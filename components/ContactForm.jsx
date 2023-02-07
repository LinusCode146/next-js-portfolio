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
                <div className={styles.nameContainer}>
                    <input type="text" placeholder={'First Name'}/>
                    <input type="text" placeholder={'Last Name'}/>
                </div>
                <div className={styles.EmailContainer}>
                    <input type="text" placeholder={'Email'}/>
                </div>
                <div className={styles.MessageContainer}>
                    <input type="text" placeholder={'Your Message'}/>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.submitButton} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}