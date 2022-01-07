import React from 'react';
import styles from "./footer.module.css"
import MailIcon from "../../public/email.svg"
const Footer = () => {
    return (
        <div className={styles.footerStyle}>
            <div className={styles.footerTextStyle}>
                Design & Develop , Masoud Hesami
                <span className={"pl-5"}> masoodhesami79@gmail.com </span>
                {/*<img src={MailIcon} alt="alt"/>*/}
            </div>
        </div>
    );
};

export default Footer;
