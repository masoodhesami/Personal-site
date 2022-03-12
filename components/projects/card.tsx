import React from 'react';
import styles from "./projects.module.css"
import GithubBtn from "../main/linkBtns/githubBtn";
import DemoBtn from "../main/linkBtns/demoBtn";
import {stringify} from "querystring";

interface IProps {
    projectData: {
        title: string,
        detail: string,
        imgUrl: string,
        githubUrl: string,
        viewUrl: string
    }
}

const Card: React.FC<IProps> = ({projectData}) => {
    console.log(projectData.imgUrl)
    return (
        <>
            <div
                className={styles.cardStyle}>
                <a href={projectData.viewUrl} target={"_blank"} rel={"noreferrer"}>
                    <img className={styles.cardImageStyle} width={400} height={200}
                         src={projectData.imgUrl} alt="alt"/>
                </a>
                <div className="p-3">
                    <a href={projectData.githubUrl} target={"_blank"} rel={"noreferrer"}>
                        <h5 className={styles.cardTitleStyle}>{projectData.title}</h5>
                        <div className={styles.cardBorderStyle}>
                        </div>
                    </a>
                    <div className={styles.cardDetails}>
                        {projectData.detail}
                    </div>
                    <p className={styles.techStyle}>
                        Technologies : <span className={styles.AtomBlue}>React Js</span> , <span
                        className={styles.AtomGreen}>Node Js</span>
                    </p>
                    <div className={"mt-3"}>
                        <GithubBtn url={projectData.githubUrl}/>
                        <DemoBtn url={projectData.viewUrl}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
