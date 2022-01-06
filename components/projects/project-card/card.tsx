import React from 'react';
import Image from "next/image";
import image from "../../../public/landing-design.svg"
import cardLine from "../../../public/cardLine.svg"
const Card = () => {
    return (
        <>
            <div
                className="max-w-sm bg-cardBackground rounded-md shadow-md dark:bg-gray-800 ml-12 mb-12">
                <a href="#">
                    <Image className="rounded-t-md" width={400} height={200} src={image} alt="alt"/>
                </a>
                <div className="p-3">
                    <a href="#">
                        <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-cardTitle">Academy-Project</h5>
                    </a>
                    <Image width={100} height={62} src={cardLine} alt="alt"/>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#"
                       className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Card;
