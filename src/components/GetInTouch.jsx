import React from "react";
import{FaSearchLocation,FaMobileAlt,} from "react-icons/fa"
import{FiMail} from "react-icons/fi"
const GetInTouch = () => {
  return (
    <div className=" pb-44 bg-secondary">
      <div className="container">
        <div className=" pb-24">
          <h1 className=" font-popins  text-2xl text-black font-semibold relative   before:absolute before:top-10 before:left-0 before:bg-primary before:content-[''] before:h-[5px] before:w-[60px]">
            GET IN TOUCH
          </h1>
          <h2 className=" mt-8 text-sm font-normal font-popins tracking-widest ">
            A LEAD UX & UI DESIGNER BASED IN BANGLADESH
          </h2>
        </div>
        <div className="flex gap-5 justify-center">
          <div className="w-[874px] h-[550px] bg-white pl-7 pt-12 pr-14">
            <h1 className="font-popins font-semibold text-lg text-[#090A0C]">
              SAY SOMETHING
            </h1>
            <div className=" mt-12 flex justify-between">
              <input
                className="border-b border-[#CCCCCC] w-[370px] font-semibold  pb-1 outline-none placeholder:text-lg"
                type="text"
                placeholder="Name*"
              />
              <input
                className="border-b border-[#CCCCCC] w-[370px] font-semibold  pb-1 outline-none placeholder:text-lg"
                type="text"
                placeholder="Email**"
              />
            </div>
            <div className=" ">
              <input
                className="border-b border-[#CCCCCC] h-20  w-full font-semibold  pb-1 outline-none placeholder:text-lg"
                type="text"
                placeholder="Subject*"
              />
              <textarea
                className="w-full h-24 border-b resize border-[#CCCCCC] outline-none mt-3 "
                placeholder="Message"
              ></textarea>
              <button className=" py-5 px-8 bg-[#D9832E] hover:bg-black text-white mt-12 font-medium text-sm">
                SEND MESSAGE
              </button>
            </div>
          </div>
          <div>
            <div className=" w-[315px] h-[130px] bg-white flex justify-between">
              <div className=" w-14 h-14 bg-primary rounded-full mt-8 ml-7 relative">
                <FaSearchLocation className=" absolute top-4 left-4 text-white text-3xl"/>
                
                
              </div>
              <div className=" w-[220px] mt-5">
                <h1 className=" text-lg font-semibold font-poppins">My Address</h1>
                <p className=" text-sm font-normal font-poppins text-pera mt-2">
                  123 S tree New York City , United States Of America 750065.
                </p>
              </div>
            </div>
            <div className=" w-[315px] h-[130px] my-12 bg-white flex justify-between">
              <div className=" w-14 h-14 bg-primary rounded-full mt-8 ml-7 relative">
              <FaMobileAlt className=" absolute top-3 left-3 text-white text-3xl"/>
              </div>
              <div className=" w-[220px] mt-5">
                <h1 className=" text-lg font-semibold font-poppins">My Phone</h1>
                <p className=" text-sm font-normal font-poppins text-pera mt-2">
                +8801571396370
                </p>
                <p className=" text-sm font-normal font-poppins text-pera mt-2">
                +8801571396370
                </p>
              </div>
            </div>
            <div className=" w-[315px] h-[130px] bg-white flex justify-between">
              <div className=" w-14 h-14 bg-primary rounded-full mt-8 ml-7 relative">
              <FiMail className=" absolute top-4 left-3 text-white text-3xl"/>
              </div>
              <div className=" w-[220px] mt-5">
                <h1 className=" text-lg font-semibold font-poppins">My Email</h1>
                <p className=" text-sm font-normal font-poppins text-pera mt-2">
                shefaiturrahman@gmail.com
                </p>
                <p className=" text-sm font-normal font-poppins text-pera mt-2">
                shefaiturrahman@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
