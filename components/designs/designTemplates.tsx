import React, {useState} from 'react';
import styles from "./designs.module.css"
import {ChevronDownIcon} from '@heroicons/react/outline'
import Modal from "../modal/modal";

interface IProps {
    allDesigns: {
        imageUrl: string,
        fullUrl: string,
        title: string
    }[]
}

const DesignTemplates: React.FC<IProps> = ({allDesigns}) => {
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
