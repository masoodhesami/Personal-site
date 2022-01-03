import React from 'react';
import styles from "./about.module.css"

const AboutText = () => {
    return (
        <div className={styles.aboutText}>
            I am <span className={styles.AtomOrange}>21</span> years old and <span
            className={styles.AtomBrown}>born</span> in the <span className={styles.AtomGreen}>north</span>.
            I started learning <span className={styles.AtomRed}>Python</span> in <span
            className={styles.AtomOrange}> 2020 </span>
            and later became interested in <span className={styles.AtomRed}> JavaScript</span>. And from there, my
            career as a <span className={styles.AtomBlue}>Front-end
            developer</span> began with learning <span className={styles.AtomBlue}> React </span> . I'm a <span
            className={styles.AtomGreen}> student </span> of computer engineering and I
            am interested in working in <span className={styles.AtomPurple}> ux </span> & <span
            className={styles.AtomPurple}> ui </span> design & <span className={styles.AtomOrange}> coding </span> in
            Front.
        </div>
    );
};

export default AboutText;
