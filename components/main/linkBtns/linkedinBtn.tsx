import React from 'react';
import styles from "./linkBtns.module.css";
import linkedin from "../../../public/LinkedIn_logo_initials.svg";

const LinkedinBtn = () => {
    return (
        <a href="https://www.linkedin.com/in/masoud-hesami/" target={"_blank"}>
            <button
                className={styles.linkinBtnStyle}>
                <img className={styles.linkinIcon} src={linkedin} alt="github"/>
            </button>
        </a>
    );
};

export default LinkedinBtn;
