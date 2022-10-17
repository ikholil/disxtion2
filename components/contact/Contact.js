import React from 'react';
import Title from '../other/Title';

const Contact = () => {
    return (
        <div className='grid h-[88vh] items-center grid-cols-12 mx-4 sm:mx-14 md:mx-20 2xl:mx-72'>
            <div className=' col-span-12 lg:col-span-7'>
                <Title text='Let’s work together' />
                <h2 className='text-white text-[43px] mt-9 font-bold'>Get in touch with me</h2>
                <p className='text-small text-secondary leading-7 pr-10 mt-4'>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
            </div>
            <div className='col-span-12 lg:col-span-5 mt-20 lg:mt-0 p-[20px] sm:p-[60px] bg-card'>
                <form>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_email" id="floating_email" class="block custom-input border-none py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0   peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-secondary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_password" id="floating_password" class="block custom-input border-none py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " required />
                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-secondary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter email address</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="text" id="floating_repeat_password" class="block custom-input border-none py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0  peer" placeholder=" " required />
                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-secondary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <textarea rows='10' id="floating_repeat_password" class="block custom-input border-none py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0  peer" placeholder=" " required />
                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-secondary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Write me a message</label>
                    </div>

                    <button className='border-1 w-40 border-primary border-solid rounded-xl inline-block text-small  py-2 px-6 text-primary  hover:text-primary '>Contact me</button>

                </form>
            </div>
        </div>
    );
};

export default Contact;