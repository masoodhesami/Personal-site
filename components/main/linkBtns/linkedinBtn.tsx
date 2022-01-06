import React from 'react';
import styles from "./linkBtns.module.css";
import linkedin from "../../../public/LinkedIn_logo_initials.svg";

const LinkedinBtn = () => {
    return (
        <button
            className={styles.linkinBtnStyle}>
            <img className={styles.linkinIcon} src={linkedin} alt="github"/>
        </button>
    );
};

export default LinkedinBtn;
