import React, { useState } from "react";
import { BsPlay } from "react-icons/bs";
import { tabs } from "../../data/tabs";
const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="flex gap-2 sm:gap-10">
      <div className="flex items-start flex-col ">
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            className={`text-secondary work-box pl-2 sm:pl-10 w-20 sm:w-40 text-left py-2 sm:py-3 text-[14px] sm:text-18 ${
              currentTab == tab.id ? "bg-[#132742] active-tab" : null
            }`}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.company}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <h1 className="text-white text-[18px] sm:text-32">
                  Engineer <span className="text-primary">@Ericsson</span>
                </h1>
                <p className="text-secondary my-5">{tab.time}</p>
                <div className="flex flex-col">
                  {tab.role.map((item, i) => (
                    <div key={i} className="flex mb-4">
                      <div className="p-[10px] shrink-0">
                        <BsPlay className="text-primary" />
                      </div>
                      <div className="grow">
                        <p className="text-secondary text-[14px] md:text-18">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
