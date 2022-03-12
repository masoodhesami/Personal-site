import React from 'react';
import styles from "./projects.module.css"
import Card from "./card";
import ProjectImg from "./projectImg";
import ProjectMoreBtn from "./projectMoreBtn";

import {projectsData} from "../../core/services/jsonFiles/projectsData.json"

const Projects = () => {
    return (
        <>
            <ProjectImg/>
            <div className={styles.projectsGrid}>
                {projectsData.map((data) => <div key={data.title}>
                    <Card projectData={data}/>
                </div>)}

            </div>
            <ProjectMoreBtn/>
        </>
    );
};

export default Projects;
