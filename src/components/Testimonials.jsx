import React from "react";

const Testimonials = () => {
  return (
    <div className=" py-44 bg-secondary">
      <div className="container">
        <div className=" pb-24">
          <h1 className=" font-popins  text-2xl text-black font-semibold relative   before:absolute before:top-10 before:left-0 before:bg-primary before:content-[''] before:h-[5px] before:w-[60px]">
            TESTIMONIALS
          </h1>
          <h2 className=" mt-8 text-sm font-normal font-popins tracking-widest ">
            A LEAD UX & UI DESIGNER BASED IN BANGLADESH
          </h2>
        </div>
        <div className="flex gap-2 justify-between">
          <div className=" w-[610px] h-[300px] border border-primary bg-white flex  px-7 pt-7 ">
            <div className=" pr-11">
              <img
                src="image/team-1.png"
                alt="Skill Image Alt Text"
                width={107}
                height={116}
              />
            </div>
            <div className=" w-[400px]">
              <p className=" text-base text-pera font-popins font-normal">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores. My passion is to design digital user
                experiences through the bold interface and meaningful
                interactions. Check out my Portfolio
              </p>
              <h1 className=" pt-6 text-lg font-semibold"> Shefaitur Rahman</h1>
              <h2 className=" pt-5 text-lg font-semibold text-pera">Co- founder</h2>
            </div>
          </div>
          <div className=" w-[610px] h-[300px] border border-primary bg-white flex  px-7 pt-7 ">
            <div className=" pr-11">
              <img
                src="image/team-1.png"
                alt="Skill Image Alt Text"
                width={107}
                height={116}
              />
            </div>
            <div className=" w-[400px]">
              <p className=" text-base text-pera font-popins font-normal">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores. My passion is to design digital user
                experiences through the bold interface and meaningful
                interactions. Check out my Portfolio
              </p>
              <h1 className=" pt-6 text-lg font-semibold"> Shefaitur Rahman</h1>
              <h2 className=" pt-5 text-lg font-semibold text-pera">Co- founder</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
