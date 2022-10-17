import React from 'react';
import { BsPlay } from 'react-icons/bs';
import Title from '../other/Title';

const About = () => {
    return (
        <div  className='grid gap-4 overflow-x-hidden bg-profile grid-cols-12 ml-4 md:ml-32 lg:ml-32 xl:ml-72 items-center justify-center'>
            <div className='col-span-12 md:col-span-6'>
                <Title text='About Me' />
                <p className='text-secondary text-small'>Hey there! My name is Dean Diaz and I enjoy creating things that live on the internet. I have worked with many big companies like Nitrosoft, Coinify, and Humble.My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>

                <p className='text-secondary mt-5 text-small'>
                    Here are a few technologies I’ve been working with recently:
                </p>
                <div className='grid grid-cols-12 mt-5'>
                    <div className='col-span-6 md:col-span-3 grid gap-y-3'>
                        <div className='flex gap-1 items-center'>
                            <BsPlay className='text-primary text-small ' />
                            <span className='text-secondary'>
                                JavaScript (ES6)

                            </span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <BsPlay className='text-primary text-small ' />
                            <span className='text-secondary'>
                                React

                            </span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <BsPlay className='text-primary text-small ' />
                            <span className='text-secondary'>
                                Node.js

                            </span>
                        </div>

                    </div>
                    <div className='col-span-6 md:col-span-3 grid gap-y-3'>
                        <div className='flex gap-1 items-center'>
                            <BsPlay className='text-primary text-small ' />
                            <span className='text-secondary'>
                                TypeScript

                            </span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <BsPlay className='text-primary text-small ' />
                            <span className='text-secondary'>
                                Elevently

                            </span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <BsPlay className='text-primary text-small ' />
                            <span className='text-secondary'>
                                Wordpress

                            </span>
                        </div>
                    </div>

                </div>
                <hr className='bg-secondary mt-5 border-none h-1 ' />
                <div className='flex overflow-x-hidden flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row bg-transparent'>
                    <div className='flex gap-5 grow items-center'>
                        <h1 className='text-57 text-white font-bold my-4'>12<span className='text-primary'>+</span></h1>
                        <p className='text-secondary text-small'>Years of <br /> experience</p>
                    </div>
                    <div className='flex gap-5 grow items-center'>
                        <h1 className='text-57 text-white font-bold my-4'>150<span className='text-primary'>+</span></h1>
                        <p className='text-secondary text-small'>Successfull <br /> projects</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;