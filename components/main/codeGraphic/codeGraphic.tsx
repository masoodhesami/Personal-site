import React from 'react';
import styles from "./codeGraphic.module.css"
import image from "../../../public/mainGraphic.svg"
const CodeGraphic = () => {
    return (
        <img className={styles.codeImgStyle} src={image} alt="alt"/>
    );
};

export default CodeGraphic;
