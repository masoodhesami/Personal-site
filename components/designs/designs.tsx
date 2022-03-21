import React, {useEffect, useState} from 'react';
import DesignsImg from "./designsImg";
import DesignTemplates from "./designTemplates";
import axios from "axios";

const Designs = () => {
    const [designs, setDesigns] = useState([])
    const fetchDesignsData = async () => {
        const data = await axios.get("/api/designs");
        setDesigns(data.data)
    }
    useEffect(() => {
        fetchDesignsData()
    }, [])
    return (
        <>
            <DesignsImg/>
            <DesignTemplates allDesigns={designs}/>
        </>
    );
};

export default Designs;
