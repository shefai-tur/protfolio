import React from "react";
const LatestWorks = () => {
  return (
    <div className=" pb-24">
      <div className="container">
        <div className=" pb-24">
          <h1 className=" font-popins  text-2xl text-black font-semibold relative   before:absolute before:top-10 before:left-0 before:bg-primary before:content-[''] before:h-[5px] before:w-[60px]">
            MY LETEST WORKS
          </h1>
          <h2 className=" mt-8 text-sm font-normal font-popins tracking-widest ">
            A LEAD UX & UI DESIGNER BASED IN BANGLADESH
          </h2>
        </div>

        <div className=" flex justify-center gap-5 flex-wrap ">
          <div className="  w-[400px] h-[392px] relative group/item hover:bg-slate-100  m-3">
            <img src="image/portfolio-1.png" alt="Skill Image Alt Text" />
            <div className="group/edit invisible group-hover/item:visible  rounded-lg   absolute m-auto top-0 left-0  bg-black w-full h-full bg-opacity-30 text-center py-[45%] ">
              <h1 className="font-semibold text-2xl   text-white">
                OREBY E-COMMARCE
              </h1>
              <p className="text-sm font-medium  text-white"> Website</p>
            </div>
          </div>
          <div className="  w-[400px] h-[392px] relative group/item hover:bg-slate-100  m-3">
            <img src="image/portfolio-2.png" alt="Skill Image Alt Text" />
            <div className="group/edit invisible group-hover/item:visible  rounded-lg   absolute m-auto top-0 left-0  bg-black w-full h-full bg-opacity-30 text-center py-[45%] ">
              <h1 className="font-semibold text-2xl   text-white">
                CHATTING APPLICATION
              </h1>
              <p className="text-sm font-medium  text-white"> Wbsite</p>
            </div>
          </div>
          <div className="  w-[400px] h-[392px] relative group/item hover:bg-slate-100  m-3">
            <img src="image/portfolio-3.png" alt="Skill Image Alt Text" />
            <div className="group/edit invisible group-hover/item:visible  rounded-lg   absolute m-auto top-0 left-0  bg-black w-full h-full bg-opacity-30 text-center py-[45%] ">
              <h1 className="font-semibold text-2xl   text-white">
                {" "}
                LIBRAY MANAGEMENT
              </h1>
              <p className="text-sm font-medium  text-white"> Wbsite</p>
            </div>
          </div>
          <div className="  w-[400px] h-[392px] relative group/item hover:bg-slate-100  m-3">
            <img src="image/portfolio-4.png" alt="Skill Image Alt Text" />
            <div className="group/edit invisible group-hover/item:visible  rounded-lg   absolute m-auto top-0 left-0  bg-black w-full h-full bg-opacity-30 text-center py-[45%] ">
              <h1 className="font-semibold text-2xl   text-white">
                {" "}
                OREBY E-COMMARCE
              </h1>
              <p className="text-sm font-medium  text-white"> Wbsite</p>
            </div>
          </div>
          <div className="  w-[400px] h-[392px] relative group/item hover:bg-slate-100  m-3">
            <img src="image/portfolio-5.png" alt="Skill Image Alt Text" />
            <div className="group/edit invisible group-hover/item:visible  rounded-lg   absolute m-auto top-0 left-0  bg-black w-full h-full bg-opacity-30 text-center py-[45%] ">
              <h1 className="font-semibold text-2xl   text-white">BLOG</h1>
              <p className="text-sm font-medium  text-white"> Wbsite</p>
            </div>
          </div>
          <div className="  w-[400px] h-[392px] relative group/item hover:bg-slate-100  m-3">
            <img src="image/portfolio-6.png" alt="Skill Image Alt Text" />
            <div className="group/edit invisible group-hover/item:visible  rounded-lg   absolute m-auto top-0 left-0  bg-black w-full h-full bg-opacity-30 text-center py-[45%] ">
              <h1 className="font-semibold text-2xl   text-white">BLOGING</h1>
              <p className="text-sm font-medium  text-white"> Wbsite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWorks;
