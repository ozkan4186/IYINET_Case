import React from 'react'
import { TbBoxSeam } from "react-icons/tb";
import { PiToolboxLight } from "react-icons/pi";
import { FaSackXmark } from "react-icons/fa6";
import { GiCellarBarrels } from "react-icons/gi";
import { GiBarrel } from "react-icons/gi";
import { LiaShirtsinbulk } from "react-icons/lia";
const Navbar = () => {
  return (
    <div className="container mx-auto my-9 sm:w-full md:w-3/4 lg:w-[56rem] ">
      <div>
        <h1>
          <span className="text-blue-500">1.</span>{" "}
          <span className="text-blue-900 font-bold ">SELECT CARGO TYPE</span>
        </h1>
      </div>
      <div className="flex flex-wrap cursor-pointer gap-2 ">
        <div className="flex-col gap-2 p-10 shadow-lg bg-white hover:bg-blue-600 rounded-lg ">
          <TbBoxSeam />
          <p>box</p>
        </div>
        <div className="flex-col gap-2 p-8 shadow-lg  bg-white hover:bg-blue-600 rounded-lg">
          <PiToolboxLight />
          <p>bigbags</p>
        </div>
        <div className="flex-col gap-2 p-8 shadow-lg  bg-white hover:bg-blue-600 rounded-lg ">
          <FaSackXmark />
          <p>sacks</p>
        </div>
        <div className="flex-col gap-2 p-8  shadow-lg  bg-white hover:bg-blue-600 rounded-lg">
          <GiBarrel />
          <p>barrels</p>
        </div>
        <div className="flex-col align-middle justify-center items-center gap-2 p-10  shadow-lg  bg-white hover:bg-blue-600 rounded-lg ">
          <GiCellarBarrels />
          <p>roll</p>
        </div>
        <div className="flex-col gap-2 p-8 shadow-lg bg-orange-100 rounded-lg   hover:bg-blue-600  ">
          <GiCellarBarrels />
          <p>pipes</p>
        </div>
        <div className="flex-col gap-2 p-8 shadow-lg  bg-orange-100 rounded-lg hover:bg-blue-600 ">
          <LiaShirtsinbulk />
          <p>bulk</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar