import React from 'react';
import styles from "./designs.module.css"
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/outline'

const allDesigns = ['landing-w-border.svg','landing-w-border.svg','landing-w-border.svg','landing-w-border.svg']
const DesignTemplates = () => {
    return (
        <>
            <div className={styles.designTemplatesGrid}>
                {allDesigns.map(design =>
                    <div key={design}>
                        <Image className={styles.designImages} width={380} height={200}  src={`/${design}`} alt="designs"/>
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
