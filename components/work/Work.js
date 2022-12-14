import Title from "../other/Title";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import { RiGithubLine } from "react-icons/ri";
import { projectData } from "../../data/project";
import { featuredProject } from "../../data/featuredProject";
const Work = () => {
  return (
    <div>
      <div className="mx-4  testcl gap-4 md:gap-10 items-center grid-cols-12 lg:mx-20 2xl:mx-72">
        <div className="col-span-12 md:col-span-9">
          <Title text="Some Things I’ve Built" />
        </div>
        {featuredProject.map((project, index) => (
          <div key={project.id} className={`flex gap-4 lg:gap-10 lg:mb-10 ${project.id % 2 == 0 && 'flex-row-reverse'}`}>
            <div
              key={project.name}
              className={`col-span-12 project w-[100%] lg:col-span-7 `}
            >
              <Image
                src={`/${project.imgUrl}`}
                width={600}
                height={400}
                layout="responsive"
                alt="project img"
              />
            </div>
            <div className={`col-span-12 project grid items-center lg:col-span-5`}>
              <p className="text-primary text-24">Featured Project</p>
              <h1 className="text-32 md:text-57 text-white mt-2 font-bold">
                {project.name}
              </h1>
              <p className="text-secondary text-small my-3 text-justify">
                {project.desc}{" "}
              </p>
              <div className="flex justify-around text-secondary border-1 border-secondary rounded-lg mt-10 text-sm p-3">
                {project.tools.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="flex mt-8 gap-5">
                <RiGithubLine className="text-secondary" size={35} />
                <TbExternalLink className="text-secondary" size={35} />
              </div>
            </div>
          </div>
        ))}
       
      </div>
      <div className="mx-4 sm:mx-10 md:mx-20 2xl:mx-72 ">
        <h1 className="text-white text-[40px] md:text-[76px] font-bold text-center mt-10 xl:mt-[240px]">
          Other Noteworthy Projects
        </h1>
        <p className="text-primary text-center text-[18px] mb-[60px]">
          A big list of things I’ve worked on
        </p>
        <div className="grid grid-cols-12 gap-6 h-auto mb-10 md:mb-[240px]">
          {projectData.map((project) => (
            <div
              className="col-span-12 md:col-span-6 xl:col-span-4 rounded-[10px] bg-card p-[30px]"
              key={project.id}
            >
              <h1 className="text-white text-24 font-bold">{project.name}</h1>
              <p className="text-secondary text-small my-[14px]">
                {project.description}
              </p>
              <div className="flex gap-3">
                {project.tech.map((item, index) => (
                  <span key={index} className="text-secondary text-[14px]">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex mt-8 gap-5">
                <RiGithubLine
                  className="text-secondary cursor-pointer"
                  size={30}
                />
                <TbExternalLink
                  className="text-secondary cursor-pointer"
                  size={30}
                />
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-white text-center text-[35px] md:text-[76px] font-bold">
          Interested in working with me?
        </h1>
        <p className="text-center text-secondary text-small mt-[10px] w-7/12 mx-auto mb-12">
          Have projects in mind? Let’s work together.Whether you have a question
          or just want to say hi, I’ll try my best to get back to you!
        </p>
        <div className="flex justify-center h-[100%] mb-20">
          <button className="border-1 w-40 border-primary border-solid rounded-xl inline-block text-small  py-2 px-6 text-primary  hover:text-primary ">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
