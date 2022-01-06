import React from 'react';
import Image from "next/image";
import image from "../../../public/landing-design.svg"
import styles from "./card.module.css"
import GithubBtn from "../../main/linkBtns/githubBtn";
import DemoBtn from "../../main/linkBtns/demoBtn";
const Card = () => {
    return (
        <>
            <div
                className={styles.cardStyle}>
                <a href="#">
                    <Image className={styles.cardImageStyle} width={400} height={200} src={image} alt="alt"/>
                </a>
                <div className="p-3">
                    <a href="#">
                        <h5 className={styles.cardTitleStyle}>Academy-Project</h5>
                        <div className={styles.cardBorderStyle}>
                        </div>
                    </a>
                    <p className={styles.techStyle}>
                        Technologies : <span className={styles.AtomBlue}>React Js</span>  , <span className={styles.AtomGreen}>Node Js</span>
                    </p>
                    <div className={"mt-3"}>
                        <GithubBtn/>
                        <DemoBtn/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
