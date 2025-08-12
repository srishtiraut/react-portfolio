import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div  className={styles.content}>
            <h1  className={styles.title}> Hi I'm Srishti </h1>
            <p  className={styles.description}>
               I am a fullstack developer with 1.5 years of experience using React and Node.js . Reach out if you'd like to know more !
            </p>
            <a  className={styles.contactBtn} href="mailto:myemail@email.com"> Contact me</a>
        </div>
        <img  className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")} 
        alt='Hero-image of me' />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur}/>
    </section>
    )
  
}
