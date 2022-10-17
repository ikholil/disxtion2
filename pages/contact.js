import Script from 'next/script';
import React from 'react';
import Contact from '../components/contact/Contact';

const contact = () => {
    return (
        <div>
            <Contact />
            <Script src='https://unpkg.com/flowbite@1.5.3/dist/flowbite.js' />
        </div>
    );
};

export default contact;