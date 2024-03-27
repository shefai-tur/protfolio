import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
const About = () => {
  return (
    <div className="bg-secondary  bg-opacity-40 pb-28">
      <div className="  container">
        <div className=" pt-44 pb-24">
          <h1 className=" font-popins  text-2xl text-black font-semibold relative   before:absolute before:top-10 before:left-0 before:bg-primary before:content-[''] before:h-[5px] before:w-[60px]">
            ABOUT ME
          </h1>
          <h2 className=" mt-8 text-sm font-normal font-popins tracking-widest ">
            A LEAD UX & UI DESIGNER BASED IN BANGLADESH
          </h2>
        </div>
        {/* ============== */}
        <div className="flex">
          <div className="w-1/2">
            <div className="bg-secondary border-[22px] border-white rounded-lg relative w-[474px]">
              <img src="image/aboutimg.png" />
              <div className=" absolute top-10 left-0 bg-white py-4 px-3 ">
                <a
                  href="https://www.facebook.com/MD.Shefaitur.rahman.nayon"
                  target="_blank"
                >
                  <AiFillFacebook className="text-4xl text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shefaitur-rahman"
                  target="_blank"
                >
                  <AiFillTwitterSquare className="my-5 text-4xl text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shefaitur-rahman"
                  target="_blank"
                >
                  <AiFillLinkedin className="text-4xl text-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-[624px]">
              <div>
                <h1 className="font-popins  text-3xl font-semibold tracking-wider text-black">
                  I'M Shefaitur Rahman
                </h1>
                <h2 className="font-popins font-normal text-lg text-[#090A0C] tracking-widest mt-3 ">
                  A LEAD UX & UI DESIGNER BASED IN BANGLADESH
                </h2>
              </div>
              <div className=" w-[478px]">
                <p className=" font-popins font-normal text-base tracking-wider text-pera mt-5">
                  A design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores. My passion is to design digital
                  user experiences through the bold interface and meningful
                  interactions. Check out my Portfolio
                </p>
              </div>

              <div className=" flex mt-2 gap-10">
                <ul className="flex">
                  <li className="font-popins text-sm font-medium  ">
                    Birthday
                  </li>
                  <li className="font-popins font-normal text-sm text-pera pl-3 border-l-2 border-[#C1C1C1]">
                    20th March 2003y
                  </li>
                </ul>

                <ul className="flex">
                  <li className="font-popins text-sm font-medium">E-mail</li>
                  <li className="font-popins font-normal text-sm text-pera pl-3 border-l-2 border-[#C1C1C1]">
                    shefaitur@gmail.com
                  </li>
                </ul>
              </div>

              <button className=" py-5 px-8 bg-[#D9832E] hover:bg-black text-white mt-12 font-medium text-sm">
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </div>
        {/* ===== */}
      </div>
    </div>
  );
};

export default About;
