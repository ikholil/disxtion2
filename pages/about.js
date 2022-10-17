import Script from 'next/script';
import React from 'react';
import About from '../components/about/About';
const about = () => {
    return (
        <div className='w-screen'>
            <About />
            <Script src='https://unpkg.com/flowbite@1.5.3/dist/flowbite.js' />
        </div>
    );
};

export default about;