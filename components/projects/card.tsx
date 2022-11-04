import React from 'react';
import styles from "./projects.module.css"
import GithubBtn from "../main/linkBtns/githubBtn";
import DemoBtn from "../main/linkBtns/demoBtn";

interface IProps {
    projectData: {
        title: string,
        detail: string,
        imgUrl: string,
        githubUrl: string,
        viewUrl: string,
        tags: {
            name: String,
            color: String
        }[]
    }
}

const Card: React.FC<IProps> = ({ projectData }) => {
    return (
        <>
            <div
                className={styles.cardStyle}>
                <a href={projectData.viewUrl} target={"_blank"} rel={"noreferrer"}>
                    <img className={styles.cardImageStyle} width={400} height={200}
                        src={projectData.imgUrl} alt="alt" />
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
                        Technologies:
                        {projectData.tags.map((item, index) => <span key={index}> /
                            <span className={styles[`${item.color}`]}>  {item.name} </span>
                        </span>
                        )}

                    </p>
                    <div className={"mt-6"}>
                        <GithubBtn url={projectData.githubUrl} />
                        <DemoBtn url={projectData.viewUrl} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
