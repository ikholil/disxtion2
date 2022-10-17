
import Link from 'next/link';
import React from 'react';
const Header = () => {
  return (

    <nav className="bg-body sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="px-4 md:px-14 flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
        <a className="flex items-center">
          <h1 className='text-6xl px-3 py-2 font-bold header' style={{ backgroundImage: 'url(https://i.ibb.co/2g8wwRg/icon.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>D</h1>
        </a>
        </Link>
       
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex items-center flex-col p-4 mt-4 bg-body rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <Link href="/about">
              <a  className="block text-secondary text-small text-x py-2 pr-4 pl-3  rounded md:bg-transparent hover:text-primary  md:p-0 dark:text-white" aria-current="page">About</a>
              </Link>
            </li>
            <li>
              <Link href="/experience">
              <a  className="block text-secondary text-small text-x py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experience</a>
              </Link>
            </li>
            <li>
              <Link href="/work">
              <a  className="block text-secondary text-small text-x py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Work</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
              <a  className="block text-secondary text-small text-x py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </Link>
            </li>
            <li className='border-1 border-primary border-solid rounded-xl'>
              <a href="#" className="block text-small  py-2 px-6 text-primary     hover:text-primary ">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Header;