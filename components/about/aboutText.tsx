import React from 'react';
import styles from "./about.module.css"

const AboutText = () => {
    return (
        <>
            <div className={styles.aboutText}>
                Ever since I can <span className={styles.AtomBlue}>remember</span> I was kind of
                person who <span className={styles.AtomOrange}>enjoyed</span> to
                know more
                about the <span className={styles.AtomGreen}>world</span> around me and nowadays my <span
                className={styles.AtomGreen}>world</span> is summed up in the word <span
                className={styles.AtomPurple}>Web</span>.
                The more <span className={styles.AtomRed}>time</span> passes, the more I <span
                className={styles.AtomBlue}>touch</span> the spirit of this system <span
                className={styles.AtomBrown}>and</span> progress
                in this field means progress in <span className={styles.AtomGreen}>life</span> for me 🪐
            </div>
            <div id={'designs'}>
            </div>
        </>
    );
};

export default AboutText;
