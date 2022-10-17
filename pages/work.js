import Script from 'next/script';
import React from 'react';
import Work from '../components/work/Work'
const work = () => {
    return (
        <div>
            <Work />
            <Script src='https://unpkg.com/flowbite@1.5.3/dist/flowbite.js' />
        </div>
    );
};

export default work;