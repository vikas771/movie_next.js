'use client'

import { useState } from 'react';
import styles from '../contact/contact.module.css'
import {Mulish} from "next/font/google";

const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

const ContactForm = () => {
    const [user,setUser] = useState({
        username : "",
        email: "",
        phone : "",
        message : ""
    })

    const [status, setStatus] = useState(null);


    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({...prevUser, [name] : value}));
    }

    const handleSubmit = async(e) =>{
        e.prevent.default();
        try {
            const response = await fetch('/api/contact', {
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }
  return (
    <>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your name
                    <input type="text" name="username" id="username"
                        placeholder="Enter your name"
                           className={mulish.className}
                           value={user.username}
                           required
                           onChange={handleChange}
                    />
                </label>
            </div>


            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email"
                           placeholder="Enter your email"
                           className={mulish.className}
                           autoComplete="off"
                           required
                           value={user.email}
                           onChange={handleChange}
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone"
                           placeholder="Enter your phone"
                           className={mulish.className}
                           required
                            autoComplete="off"
                            value={user.phone}
                           onChange={handleChange}
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea  name="message" id="message" rows={5}
                           placeholder="Enter your Message"
                           className={mulish.className}
                           required
                            autoComplete="off"
                            value={user.message}
                           onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" className={mulish.className}>Send Message</button>
            </div>


      </form>
    </>
  )
}

export default ContactForm
