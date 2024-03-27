import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaCopyright
} from "react-icons/fa";

const Fotter = () => {
  return (
    <div className=" h-24 bg-black">
      <div className=" container ">
        <div className=" flex justify-between py-10">
          <div className=" text-white flex items-start text-xl gap-5 ">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaPinterestP />
          </div >
         <div className=" flex text-white  mr-36">
         <FaCopyright/>
          <p>2023 copyright all right reserved</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
