import Script from 'next/script';
import React from 'react';
import Experience from '../components/experience/Experience';

const experience = () => {
    return (
        <div>
            <Experience />
            <Script src='https://unpkg.com/flowbite@1.5.3/dist/flowbite.js' />
        </div>
    );
};

export default experience;