import React from 'react';
import styles from "./linkBtns.module.css";
import {EyeIcon} from '@heroicons/react/outline'

interface IProps {
    url: string
}

const DemoBtn: React.FC<IProps> = ({url}) => {
    return (
        <a href={url} target={"_blank"} rel={"noreferrer"}>
            <button
                className={styles.demoBtnStyle}>
                <EyeIcon className={styles.demoIcon}/>
            </button>
        </a>
    );
};

export default DemoBtn;
