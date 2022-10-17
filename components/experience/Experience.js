import React, { useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import Title from '../other/Title';

const Experience = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    console.log(toggleState)
    return (
        <div className='bg-profile grid items-center grid-cols-12 h-full'>
            <div className='col-span-12  md:col-span-9 mx-4  md:mx-20 xl:mx-72'>
                <div className='h-[300px] flex items-center md:h-[100%]'>
                    <Title text="Where I’ve Worked" />
                </div>
                <div className='flex gap-2 sm:gap-10'>
                    <div className='flex items-start flex-col work-box'>
                        <button className={`text-secondary pl-4 sm:pl-10 w-28 sm:w-40 text-left py-3 text-[14px] sm:text-18 ${toggleState == 1 ? 'active-tab bg-tab' : null}`} onClick={() => toggleTab(1)}>Ericson</button>
                        <button className={`text-secondary pl-4 sm:pl-10 w-28 sm:w-40 text-left py-3 text-[14px] sm:text-18 ${toggleState == 2 ? 'active-tab bg-tab' : null}`} onClick={() => toggleTab(2)}>Facebook</button>
                        <button className={`text-secondary pl-4 sm:pl-10 w-28 sm:w-40 text-left py-3 text-[14px] sm:text-18 ${toggleState == 3 ? 'active-tab bg-tab' : null}`} onClick={() => toggleTab(3)}>Duff Beer</button>
                        <button className={`text-secondary pl-4 sm:pl-10 w-28 sm:w-40 text-left py-3 text-[14px] sm:text-18 ${toggleState == 4 ? 'active-tab bg-tab' : null}`} onClick={() => toggleTab(4)}>Initech</button>
                        <button className={`text-secondary pl-4 sm:pl-10 w-28 sm:w-40 text-left py-3 text-[14px] sm:text-18 ${toggleState == 5 ? 'active-tab bg-tab' : null}`} onClick={() => toggleTab(5)}>Hooli</button>
                        <button className={`text-secondary pl-4 sm:pl-10 w-28 sm:w-40 text-left py-3 text-[14px] sm:text-18 ${toggleState == 6 ? 'active-tab bg-tab' : null}`} onClick={() => toggleTab(6)}>SingTel</button>
                        <button className={`text-secondary pl-4 sm:pl-10 w-28 sm:w-40 text-left py-3 text-[14px] sm:text-18 ${toggleState == 7 ? 'active-tab bg-tab' : null}`} onClick={() => toggleTab(7)}>Fortive</button>
                    </div>
                    <div className={toggleState == 1 ? 'block' : 'hidden'}>
                        <h1 className='text-white text-32'>Engineer <span className='text-primary'>@Ericsson</span></h1>
                        <p className='text-secondary my-5'>May 2018 - Present</p>
                        <div className='flex flex-col'>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array of client diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable   of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, code for a diverse array performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={toggleState == 2 ? 'block' : 'hidden'}>
                        <h1 className='text-white text-32'>Engineer <span className='text-primary'>@Ericsson</span></h1>
                        <p className='text-secondary my-5'>March 2018 - November 2020</p>
                        <div className='flex flex-col'>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write code for a diverse array modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array  and internal maintainable of client projects</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={toggleState == 3 ? 'block' : 'hidden'}>
                        <h1 className='text-white text-32'>Engineer <span className='text-primary'>@Ericsson</span></h1>
                        <p className='text-secondary my-5'>July 2017 - September 2019</p>
                        <div className='flex flex-col'>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'> and internal maintainableWrite modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, and internal maintainable performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={toggleState == 4 ? 'block' : 'hidden'}>
                        <h1 className='text-white text-32'>Engineer <span className='text-primary'>@Ericsson</span></h1>
                        <p className='text-secondary my-5'>June 2014 - August 2016</p>
                        <div className='flex flex-col'>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern,  and internal maintainable maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,   and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'> and internal maintainable and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={toggleState == 5 ? 'block' : 'hidden'}>
                        <h1 className='text-white text-32'>Engineer <span className='text-primary'>@Ericsson</span></h1>
                        <p className='text-secondary my-5'>December 2014 - May 2015</p>
                        <div className='flex flex-col'>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse and internal maintainable</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={toggleState == 6 ? 'block' : 'hidden'}>
                        <h1 className='text-white text-32'>Engineer <span className='text-primary'>@Ericsson</span></h1>
                        <p className='text-secondary my-5'>April 2012 - May 2013</p>
                        <div className='flex flex-col'>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={toggleState == 7 ? 'block' : 'hidden'}>
                        <h1 className='text-white text-32'>Engineer <span className='text-primary'>@Ericsson</span></h1>
                        <p className='text-secondary my-5'>May 2010 - April 2011</p>
                        <div className='flex flex-col'>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <div className='p-[10px]'>
                                    <BsPlay className='text-primary' />
                                </div>
                                <div className='grow'>

                                    <p className='text-secondary'>Write modern, performant,  and internal maintainable code for a diverse array of client projects</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;