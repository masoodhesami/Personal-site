import React from 'react';
import styles from "./linkBtns.module.css";
import gitlab from "../../../public/gitlab.svg";

const GitlabBtn = () => {
    return (
        <button
            className={styles.gitlabBtnStyle}>
            <img className={styles.gitlabIcon} src={gitlab} alt="github"/>
        </button>
    );
};

export default GitlabBtn;
