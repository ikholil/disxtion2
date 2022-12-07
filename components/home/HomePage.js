import React from "react";
import Title from "../other/Title";
const HomePage = () => {
  return (
    <div className="grid w-full overflow-x-hidden overflow-y-hidden h-full bg-profile items-center justify-between">
      <div className="mx-8 col-span-7 my-6 sm:my-0 sm:w-screen sm:mx-10 md:mx-16 2xl:mx-52  md:-mt-20">
        <h3 className="text-primary -mb-2 text-[25px] md:text-32">
          Freelance Web Developer
        </h3>
        <Title text="Dean Diaz" />
        <p className="text-secondary md:w-1/3">
          Hey there! My name is Dean Diaz and I am a New York based web
          developer with over 12 years of experience. I have worked with many
          big companies like Nitrosoft, Coinify, and Humble.
        </p>
        <a className="text-white my-8 block" href="#">
          More About Me →
        </a>
      </div>
    </div>
  );
};

export default HomePage;
