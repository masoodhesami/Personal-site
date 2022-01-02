import React from 'react';
import styles from "./linkBtns.module.css"
import github from "../../../assists/img/github.svg"
import gitlab from "../../../assists/img/gitlab.svg"
import linkedin from "../../../assists/img/LinkedIn_logo_initials.svg"


const LinkBtns = () => {
    return (
        <>
            <div className={styles.btnsDiv}>
                <button
                    className={styles.githubBtnStyle}>
                    {/*<AiFillGithub className={styles.githubIcon}/>*/}
                    <img className={styles.githubIcon} src={github} alt="github"/>
                </button>
                <button
                    className={styles.gitlabBtnStyle}>
                    {/*<AiFillGitlab className={styles.gitlabIcon}/>*/}
                    <img className={styles.gitlabIcon} src={gitlab} alt="github"/>
                </button>
                <button
                    className={styles.linkinBtnStyle}>
                    {/*<AiFillLinkedin className={styles.linkinIcon}/>*/}
                    <img className={styles.linkinIcon} src={linkedin} alt="github"/>
                </button>
            </div>
        </>
    );
};

export default LinkBtns;
