import React from 'react';
import styles from "./designs.module.css"
import Image from 'next/image'
import {ChevronDownIcon} from '@heroicons/react/outline'

const allDesigns = [
    {
        imageUrl: 'https://s23.picofile.com/file/8448278092/sepehr.png',
        fullUrl: 'https://s23.picofile.com/file/8448277918/landing.png'
    },
    {
        imageUrl: 'https://s22.picofile.com/file/8448277976/Web_1920_%E2%80%93_1_2x.png',
        fullUrl: 'https://s22.picofile.com/file/8448278692/shoes_ui.png'
    },
    {
        imageUrl: 'https://s22.picofile.com/file/8448278076/rightel.png',
        fullUrl: 'https://s23.picofile.com/file/8448278292/rightel_ui.png'
    },
    {
        imageUrl: 'https://s22.picofile.com/file/8448278050/news.png',
        fullUrl: 'https://s23.picofile.com/file/8448278542/news_ui.png'
    }
]
const DesignTemplates = () => {
    return (
        <>
            <div className={styles.designTemplatesGrid}>
                {allDesigns.map(design =>
                    <div key={design.imageUrl}>
                        <a href={design.fullUrl} target={"_blank"}
                           rel={"noreferrer"}>
                            <img className={styles.designImages} src={`${design.imageUrl}`} alt="designs"/>
                        </a>
                    </div>
                )}
            </div>
            <div className={styles.divFlexCenter}>
                <button id={'projects'} className={styles.moreBtn}>
                    <span>More</span>
                    <ChevronDownIcon className={styles.btnArrow}/>
                </button>
            </div>
        </>
    );
};

export default DesignTemplates;
