import React from 'react';
import styles from "./linkBtns.module.css";
import github from "../../../public/github.svg";

const GithubBtn = () => {
    return (
        <a href="https://github.com/masoodhesami" target={"_blank"} rel={"noreferrer"}>
            <button
                className={styles.githubBtnStyle}>
                <img className={styles.githubIcon} src={github} alt="github"/>
            </button>
        </a>
    );
};

export default GithubBtn;
