"use client"

import styles from './ContactForm.module.css'
import { useState, useRef } from "react";
import { router } from "next/navigation";
import {emitter} from "next/client";

//Todo: sent email with current content or save data in database

export default function ContactForm() {
    const [clientName, setClientName] = useState('')
    const [message, setMessage] = useState('')

    const messageRef = useRef();
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()

    function submitHandler(e) {
        e.preventDefault()

        console.log('submitted')
        messageRef.current.value = '';
        firstNameRef.current.value = '';
        lastNameRef.current.value = '';
        emailRef.current.value = '';
    }

    return (
        <div  onLoad={() => router.refresh()} className={styles.formContainer}>
            <form onSubmit={submitHandler}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className={styles.nameContainer}>
                    <input ref={firstNameRef} autoComplete="off" className={styles.FirstNameInput} type="text" placeholder={'First Name'}/>
                    <input ref={lastNameRef} className={styles.LastNameInput} type="text" placeholder={'Last Name'}/>
                </div>
                <div className={styles.EmailContainer}>
                    <input ref={emailRef} className={styles.EmailInput} type="email" placeholder={'Your Email'}/>
                </div>
                <div className={styles.MessageContainer}>
                    <textarea ref={messageRef} className={styles.MessageInput} placeholder={'Your Message'}/>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.submitButton} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}