import React from 'react';
import designStyles from "../designs/designs.module.css";
import projectStyles from "./projects.module.css"
import {ChevronDownIcon} from "@heroicons/react/outline";

const ProjectMoreBtn = () => {
    return (
        <div className={designStyles.divFlexCenter}>
            <button id={'contact'} className={projectStyles.projectMoreBtn}>
                <span>More</span>
                <ChevronDownIcon className={designStyles.btnArrow}/>
            </button>
        </div>
    );
};

export default ProjectMoreBtn;
