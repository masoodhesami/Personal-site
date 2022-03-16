import React, {useState} from 'react';
import styles from "./designs.module.css"
import {ChevronDownIcon} from '@heroicons/react/outline'
import Modal from "../modal/modal";

const allDesigns = [
    {
        imageUrl: 'https://s23.picofile.com/file/8448278092/sepehr.png',
        fullUrl: 'https://s23.picofile.com/file/8448277918/landing.png',
        title: "Academy Design"
    },
    {
        imageUrl: 'https://s22.picofile.com/file/8448277976/Web_1920_%E2%80%93_1_2x.png',
        fullUrl: 'https://s22.picofile.com/file/8448278692/shoes_ui.png',
        title: "Shoes Website"
    },
    {
        imageUrl: 'https://s22.picofile.com/file/8448278076/rightel.png',
        fullUrl: 'https://s23.picofile.com/file/8448278292/rightel_ui.png',
        title: "Rightel Design"
    },
    {
        imageUrl: 'https://s22.picofile.com/file/8448278050/news.png',
        fullUrl: 'https://s23.picofile.com/file/8448278542/news_ui.png',
        title: "News Design"
    }
]
const DesignTemplates = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({title: "", fullUrl: "",});

    const SetModal = (title: string, url: string) => {
        setShowModal(true);
        setModalData({title: title, fullUrl: url});
    }
    return (
        <>
            <div className={styles.designTemplatesGrid}>
                {allDesigns.map(design =>
                    <div key={design.imageUrl}>
                        <img onClick={() => SetModal(design.title, design.fullUrl)} className={styles.designImages}
                             src={`${design.imageUrl}`} alt="designs"/>
                    </div>
                )}
                {showModal && <Modal showModal={showModal}
                                     modalData={modalData}
                                     setShowModal={setShowModal}
                />}
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
