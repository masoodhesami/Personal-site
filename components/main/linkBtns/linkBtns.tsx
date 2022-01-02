import React from 'react';
import styles from "./linkBtns.module.css"
import {AiFillGithub, AiFillGitlab, AiFillLinkedin} from "react-icons/all";

const LinkBtns = () => {
    return (
        <>
            <div className={styles.btnsDiv}>
                <button
                    className={styles.githubBtnStyle}>
                    <AiFillGithub className={styles.githubIcon}/>
                </button>
                <button
                    className={styles.gitlabBtnStyle}>
                    <AiFillGitlab className={styles.gitlabIcon}/>
                </button>
                <button
                    className={styles.linkinBtnStyle}>
                    <AiFillLinkedin className={styles.linkinIcon}/>
                </button>
            </div>
        </>
    );
};

export default LinkBtns;
