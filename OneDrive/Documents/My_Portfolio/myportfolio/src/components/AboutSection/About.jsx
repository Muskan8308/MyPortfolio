import React from 'react'
import styles from './About.module.css'

export const About = () => {
  return (
    <>
      <div className={styles.container} id='about'>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.aboutText}>
          "I’m a pre-final year Computer Science student passionate about
          building real-world web applications. I’ve created responsive projects
          using React for frontend and Spring Boot for backend development.
          Alongside this, I’ve solved 300+ DSA problems on LeetCode and actively
          participate in coding contests to sharpen my problem-solving skills. I
          focus on writing clean, efficient code—whether working on intuitive
          UIs or backend logic. Currently, I’m aiming to become a well-rounded
          full-stack Java developer while preparing for upcoming placement
          opportunities." 
        </p>
      </div>
    </>
  );
}
