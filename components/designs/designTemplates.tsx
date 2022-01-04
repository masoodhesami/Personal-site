import React from 'react';
import styles from "./designs.module.css"
import design1 from "../../assists/img/landing-design.svg"
import design2 from "../../assists/img/personal-design.svg"
import design3 from "../../assists/img/shoes-design.svg"
import design4 from "../../assists/img/rightel-design.svg"
import arrow from "../../assists/img/down-arrow.svg"

const allDesigns = [design1, design2, design3, design4]
const DesignTemplates = () => {
    return (
        <>
            <div className={styles.designTemplatesGrid}>
                {allDesigns.map(design =>
                    <div key={design}>
                        <img className={styles.designImages} src={design} alt="designs"/>
                    </div>
                )}
            </div>
            <div className={styles.divFlexCenter}>
                <button className={styles.moreBtn}>
                    <span>More</span>
                    <img className={styles.btnArrow} src={arrow} alt="arrow"/>
                </button>
            </div>

        </>
    );
};

export default DesignTemplates;
