import React from "react";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className=" w-1/2 ml-2">
          <p className=" text-lg font-medium font-Poppins mt-44">
            Hello There...
          </p>
          <h1 className=" text-6xl font-semibold text-[#090A0C] mt-2">
            Shefaitur Rahman n
          </h1>
          <h2 className=" mt-2 font-medium text-xl">
            I AM Passionate Developer{" "}
          </h2>
          <p className=" font-normal text-base text-[#555A64] mt-5 w-[556px]">
            The namics of how users interact with interactive elements within a
            user interface flow chart on container proportion
          </p>
          <div className="flex gap-5">
            <>
              <button className=" py-5 px-14 bg-[#D9832E] hover:bg-black text-white mt-28 font-medium text-base">
                MY WORK
              </button>

              <button className=" py-5 px-14 bg-black hover:bg-[#D9832E]  text-white mt-28 font-medium text-base">
                HIRE ME
              </button>
            </>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full h-full bg-secondary bg-opacity-20">
            <img src="image/bannerimg-1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
