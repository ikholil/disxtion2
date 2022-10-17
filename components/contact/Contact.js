import React from 'react';
import Title from '../other/Title';
import { Formik } from 'formik';
const Contact = () => {
    return (
        <div className='grid h-full mb-10 lg:h-[88vh] items-center  grid-cols-12 mx-4 sm:mx-14 md:mx-20 2xl:mx-72'>
            <div className=' col-span-12 lg:col-span-7'>
                <Title text='Let’s work together' />
                <h2 className='text-white text-24 md:text-[43px] mt-9 font-bold'>Get in touch with me</h2>
                <p className='text-small text-secondary leading-7 pr-10 mt-4'>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
            </div>
            <div className='col-span-12 lg:col-span-5 pb-10 mt-20 lg:mt-0 p-5 sm:p-[25px] 2xl:p-[60px] bg-card'>

                <Formik
                    initialValues={{ name: '', email: '', subject: '', message: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Email is Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.name) {
                            errors.name = 'Name is Required';
                        } if (!values.subject) {
                            errors.subject = 'Subject is Required';
                        } if (!values.message) {
                            errors.message = 'Message is Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name} name="name" id="name" className="block custom-input border-none py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0   peer" placeholder=" " required />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-secondary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name</label>
                                <span className='text-red-500'> {errors.name && touched.name && errors.name}</span>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="email" onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} name="email" id="email" className="block custom-input border-none py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0  peer" placeholder=" " required />
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-secondary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter email address</label>
                                <span className='text-red-500'> {errors.email && touched.email && errors.email}</span>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subject} type="text" id="subject" name="subject" className="block custom-input border-none py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0  peer" placeholder=" " required />
                                <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-secondary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                                <span className='text-red-500'> {errors.subject && touched.subject && errors.subject}</span>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <textarea rows='10' onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message} id="message" name='message' className="block custom-input border-none py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0  peer" placeholder=" " required />
                                <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-secondary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Write me a message</label>
                                <span className='text-red-500'> {errors.message && touched.message && errors.message}</span>
                            </div>

                            <button className='border-1 w-40 border-primary border-solid rounded-xl inline-block text-small  py-2 px-6 text-primary  hover:text-primary '>Contact me</button>






                        </form>
                    )}
                </Formik>


            </div>
        </div>
    );
};

export default Contact;