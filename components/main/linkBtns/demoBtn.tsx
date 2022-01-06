import React from 'react';
import styles from "./linkBtns.module.css";
import {EyeIcon} from '@heroicons/react/outline'

const DemoBtn = () => {
    return (
        <button
            className={styles.demoBtnStyle}>
            <EyeIcon className={styles.demoIcon}/>
        </button>
    );
};

export default DemoBtn;
