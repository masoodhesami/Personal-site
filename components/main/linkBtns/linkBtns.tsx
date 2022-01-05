import React from 'react';
import styles from "./linkBtns.module.css"
import github from "../../../public/github.svg"
import gitlab from "../../../public/gitlab.svg"
import linkedin from "../../../public/LinkedIn_logo_initials.svg"


const LinkBtns = () => {
    return (
        <>
            <div className={styles.btnsDiv} id={'about'}>
                <button
                    className={styles.githubBtnStyle}>
                    <img className={styles.githubIcon} src={github} alt="github"/>
                </button>
                <button
                    className={styles.gitlabBtnStyle}>
                    <img className={styles.gitlabIcon} src={gitlab} alt="github"/>
                </button>
                <button
                    className={styles.linkinBtnStyle}>
                    <img className={styles.linkinIcon} src={linkedin} alt="github"/>
                </button>
            </div>
        </>
    );
};

export default LinkBtns;
