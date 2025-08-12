import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage}
                src={getImageUrl("about/aboutImage.png")}
                alt="Me sitting with laptop"
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem} >
                    <img src={getImageUrl("about/cursorIcon.png")} alt='cursor-icon'/>
                    <div className={styles.aboutItemText}>
                        <h3> Javascript Developer</h3>
                        <p>My work day involves writing scalable and robust JS code for core regulation automatization in the automotive industry. My off day looks like me coding and (happily?) debugging on a fun side project.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt='ui-icon'/>
                    <div className={styles.aboutItemText}>
                        <h3> Salesforce Developer </h3>
                        <p>I am a Trailhead Ranger and Salesforce certified Platform Developer 1{" "}having built projects in Sales Cloud and Omnistudio using Apex, Lightning Web Components and Flows. </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='server-icon'/>
                    <div className={styles.aboutItemText}>
                        <h3> Problem Solving</h3>
                        <p>I like to challenge my brain with Data Structures and Algorithms&apos; problems and come up with solutions in C++. This journey has taught me structured thinking and a mindset of continuous improvement. </p>
                    </div>
                </li>
                
            </ul>
        </div>
    </section>
  )
}
