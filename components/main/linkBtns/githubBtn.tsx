import React from 'react';
import styles from "./linkBtns.module.css";
import github from "../../../public/github.svg";

const GithubBtn = () => {
    return (
        <button
            className={styles.githubBtnStyle}>
            <img className={styles.githubIcon} src={github} alt="github"/>
        </button>
    );
};

export default GithubBtn;
