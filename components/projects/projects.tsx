import React from 'react';
import styles from "./projects.module.css"
import Card from "./project-card/card";

const Projects = () => {
    return (
        <div className={styles.projectsGrid}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default Projects;
