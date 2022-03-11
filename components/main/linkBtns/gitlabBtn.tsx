import React from 'react';
import styles from "./linkBtns.module.css";
import gitlab from "../../../public/gitlab.svg";

const GitlabBtn = () => {
    return (
        <a href="https://gitlab.com/masoodhesami79" target={"_blank"} rel={"noreferrer"}>
            <button
                className={styles.gitlabBtnStyle}>
                <img className={styles.gitlabIcon} src={gitlab} alt="github"/>
            </button>
        </a>
    );
};

export default GitlabBtn;
