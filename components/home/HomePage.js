import React from 'react';
import Title from '../other/Title'
const HomePage = () => {
    return (
        <div className='grid w-full h-full bg-profile items-center justify-between'>
            <div className='mx-8 col-span-7 md:mx-52 lg:mx-52 md:w-5/12 mt-8 md:mt-32'>
                <h3 className='text-primary text-32'>Freelance Web Developer</h3>
                <Title text="Dean Diaz" />
                <p className='text-secondary'>Hey there! My name is Dean Diaz and I am a New York based web developer with over 12 years of experience. I have worked with many big companies like Nitrosoft, Coinify, and Humble.</p>
                <a className='text-white my-8 block' href="#">More About Me →</a>
            </div>

        </div>
    );
};

export default HomePage;