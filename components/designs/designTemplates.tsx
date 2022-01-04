import React from 'react';
import styles from "./designs.module.css"
import design1 from "../../assists/img/landing-design.svg"
import design2 from "../../assists/img/personal-design.svg"
import design3 from "../../assists/img/shoes-design.svg"
import design4 from "../../assists/img/rightel-design.svg"

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
            <button className={styles.moreBtn}>
                More
            </button>
        </>
    );
};

export default DesignTemplates;
