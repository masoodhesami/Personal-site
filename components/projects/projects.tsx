import React from 'react';
import styles from "./projects.module.css"
import Card from "./card";
import ProjectImg from "./projectImg";
import ProjectMoreBtn from "./projectMoreBtn";

const Projects = () => {
    return (
        <>
            <ProjectImg/>
            <div className={styles.projectsGrid}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <ProjectMoreBtn/>
            </div>
        </>
    );
};

export default Projects;
