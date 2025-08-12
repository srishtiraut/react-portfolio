import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div  className={styles.content}>
            <h1  className={styles.title}>Hi I'm Srishti</h1>
            <p  className={styles.description}>
               I am a computer engineer with 2.5 years of software development experience. Reach out if you'd like to know more !
            </p>
            <a  className={styles.contactBtn} href="mailto:srishti.raut1102000@gmail.com"> Contact me</a>
        </div>
        <img  className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")} 
        alt='Hero-image of me' />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur}/>
    </section>
    )
  
}
