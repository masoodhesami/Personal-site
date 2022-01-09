import React from 'react';
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footerStyle}>
            <div className={styles.footerTextStyle}>
                Design & Develop , Masoud Hesami
            </div>
            <div className={styles.footerTextStyle}>
                <span > <span className={styles.AtomBlue}>Mail: </span>
                    masoodhesami79@gmail.com </span>
            </div>
        </div>
    );
};

export default Footer;
