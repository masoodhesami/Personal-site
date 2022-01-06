import React from 'react';
import styles from "./linkBtns.module.css"
import GithubBtn from "./githubBtn";
import GitlabBtn from "./gitlabBtn";
import LinkedinBtn from "./linkedinBtn";


const LinkBtns = () => {
    return (
        <>
            <div className={styles.btnsDiv} id={'about'}>
                <GithubBtn/>
                <GitlabBtn/>
                <LinkedinBtn/>
            </div>
        </>
    );
};

export default LinkBtns;
