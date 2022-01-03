import React from 'react';
import styles from "./designs.module.css"
import design1 from "../../assists/img/landing.svg"

const DesignTemplates = () => {
    return (
        // map images and fix hover
        <div className={styles.designTemplatesGrid}>
            <div>
                <img className={styles.designImages} src={design1} alt="design1"/>
            </div>
            <div>
                <img className={styles.designImages}  src={design1} alt="design1"/>
            </div>
            <div>
                <img className={styles.designImages}  src={design1} alt="design1"/>
            </div>
            <div>
                <img className={styles.designImages}  src={design1} alt="design1"/>
            </div>
        </div>
    );
};

export default DesignTemplates;
