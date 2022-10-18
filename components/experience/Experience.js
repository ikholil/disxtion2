import Tabs from "../other/Tab";
import Title from "../other/Title";

const Experience = () => {
  return (
    <div className="bg-profile grid items-center grid-cols-12 h-full">
      <div className="col-span-12  xl:col-span-9 mx-4  md:mx-20 xl:mx-72">
        <div className="h-[300px] flex items-center md:h-[100%]">
          <Title text="Where I’ve Worked" />
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default Experience;
