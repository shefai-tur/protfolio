import React from 'react'
import { FaHome,FaAddressCard,FaBriefcase,FaAddressBook } from "react-icons/fa";
const Sidbar = () => {
  return (
    <div>
        <div className=" w-[140px] shadow-lg	h-screen">
      <div className="bg-[#D9832E]">
        <h1 className="text-white flex justify-center py-3.5">Shefaitur</h1>
      </div>
      <div className="border-b-2 py-2.5">
        <FaHome className="text-[30px] ml-[38%] text-[#D9832E] " />
        <h1 className="flex justify-center text-[#D9832E] font-semibold">Home</h1>
      </div>
      <div className=" border-b-2 py-2.5">
        <FaAddressCard className="text-[30px] ml-[38%] " />
        <h1 className="flex justify-center font-semibold">ABOUT ME</h1>
      </div>
      <div className="border-b-2 py-2.5">
        <FaBriefcase className="text-[30px] ml-[38%] " />
        <h1 className="flex justify-center font-semibold">PORTFOLIO</h1>
      </div>
      <div className="border-b-2 py-2 ">
        <FaAddressBook className="text-[30px] ml-[38%] " />
        <h1 className="flex justify-center font-semibold">CONTACT</h1>
      </div>
    </div>
    </div>
  )
}

export default Sidbar