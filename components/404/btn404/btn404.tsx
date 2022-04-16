import React from 'react';
import styles from "../page404.module.css"

const Btn404 = () => {

   const routeHandler = () => {
    window.location.replace("/")
    }

    return (
        <>
            <div className={styles.btnGrid}>
            <button onClick={routeHandler}
                className={styles.btn404style}>
                Back to home
            </button>
            </div>

        </>
    );
};

export default Btn404;
