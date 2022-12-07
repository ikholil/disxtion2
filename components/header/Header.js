import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {useRouter} from 'next/router'
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  return (
    <nav className="bg-body sm:px-4 py-2.5 rounded">
      <div className="px-4 md:px-14 flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/icon.png" height={45} width={45} alt="logo" />
          </a>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  "
        >
          <HiMenu size={40} className="text-white" />
        </button>
        <div
          className={` w-full md:block md:w-auto ${
            open ? "block h-[88vh] z-50 bg-[#0A192E] fixed top-16" : "hidden"
          }`}
        >
          <ul className="flex items-center flex-col md:p-4 mt-4 bg-body rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {
              [['About', 'about'], ['Experience', 'experience'], ['Work', 'work'], ['Contact', 'contact']].map(([title, url])=> (
                <li key={url} onClick={() => setOpen(false)}>
              <Link href={`/${url}`}>
                <a
                  className={`block text-small text-x py-2 pr-4 md:pl-3  rounded md:bg-transparent hover:text-primary md:p-0 ${router.pathname == url ? 'text-[#64FFDA]':'text-secondary'}`}
                  aria-current="page"
                >
                  {title}
                </a>
              </Link>
            </li>
              ))
            }
            {/* <li onClick={() => setOpen(false)}>
              <Link href="/about">
                <a
                  className="block text-secondary text-small text-x py-2 pr-4 md:pl-3  rounded md:bg-transparent hover:text-primary  md:p-0 dark:text-white"
                  aria-current="page"
                >
                  About
                </a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/experience">
                <a className="block text-secondary text-small text-x py-2 pr-4 md:pl-3  rounded r md:hover:bg-transparent md:border-0 hover:text-primary md:p-0 ">
                  Experience
                </a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/work">
                <a className="block text-secondary text-small text-x py-2 pr-4 md:pl-3  rounded r md:hover:bg-transparent md:border-0 hover:text-primary md:p-0 ">
                  Work
                </a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/contact">
                <a className="block text-secondary text-small text-x py-2 pr-4 md:pl-3  rounded md:hover:bg-transparent md:border-0 hover:text-primary md:p-0 ">
                  Contact
                </a>
              </Link>
            </li> */}
            <li className="border-1 border-[#64FFDA] border-solid rounded-xl">
              <a
                href="#"
                className="block text-small  py-2 px-6 text-primary     hover:text-primary "
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
