import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "./projects.module.css"
import Card from "./card";
import ProjectImg from "./projectImg";
import ProjectMoreBtn from "./projectMoreBtn";


const Projects = () => {
    const [projects, setProjects] = useState([])
    const fetchProjectsData = async () => {
        const data = await axios.get("/api/projects");
        setProjects(data.data);
    }
    useEffect(() => {
        fetchProjectsData()
    }, []);

    return (
        <>
            <ProjectImg/>
            <div className={styles.projectsGrid}>
                {projects.map((data, index) => <div key={index}>
                    <Card projectData={data}/>
                </div>)}

            </div>
            <ProjectMoreBtn/>
        </>
    );
};

export default Projects;
