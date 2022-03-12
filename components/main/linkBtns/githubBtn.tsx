import React from 'react';
import styles from "./linkBtns.module.css";
import github from "../../../public/github.svg";

interface IProps {
    url: string
}

const GithubBtn:React.FC<IProps> = ({url}) => {
    return (
        <a href={url} target={"_blank"} rel={"noreferrer"}>
            <button
                className={styles.githubBtnStyle}>
                <img className={styles.githubIcon} src={github} alt="github"/>
            </button>
        </a>
    );
};

export default GithubBtn;
