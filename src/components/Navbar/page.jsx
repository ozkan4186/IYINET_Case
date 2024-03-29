import React from 'react'
import { TbBoxSeam } from "react-icons/tb";
import { PiToolboxLight } from "react-icons/pi";
import { FaSackXmark } from "react-icons/fa6";
import { GiCellarBarrels } from "react-icons/gi";
import { GiBarrel } from "react-icons/gi";
import { LiaShirtsinbulk } from "react-icons/lia";
import Link from 'next/link';
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
        <Link
          href={"/box"}
          className="flex-col gap-2 p-10 shadow-lg bg-white hover:bg-blue-600 rounded-lg "
        >
          <TbBoxSeam className="m-auto text-5xl text-gray-500 " />
          <p className="ml-3">box</p>
        </Link>
        <Link
          href={"/bigbags"}
          className="flex-col gap-2 p-8 shadow-lg  bg-white hover:bg-blue-600 rounded-lg"
        >
          <PiToolboxLight className="m-auto text-5xl text-gray-500 " />
          <p>bigbags</p>
        </Link>
        <Link
          href={"/sacks"}
          className="flex-col gap-2 p-8 shadow-lg  bg-white hover:bg-blue-600 rounded-lg "
        >
          <FaSackXmark className="m-auto text-5xl text-gray-500 " />
          <p>sacks</p>
        </Link>
        <Link
          href={"/barrels"}
          className="flex-col gap-2 p-8  shadow-lg  bg-white hover:bg-blue-600 rounded-lg"
        >
          <GiBarrel className="m-auto text-5xl text-gray-500" />
          <p>barrels</p>
        </Link>
        <Link
          href={"/roll"}
          className="flex-col align-middle justify-center items-center gap-2 p-10  shadow-lg  bg-white hover:bg-blue-600 rounded-lg "
        >
          <GiCellarBarrels className="m-auto text-5xl text-gray-500 " />
          <p>roll</p>
        </Link>
        <Link
          href={"/pipes"}
          className="flex-col gap-2 p-8 shadow-lg  rounded-lg   hover:bg-blue-600  "
          style={{ backgroundColor: "#F6F6F6" }}
        >
          <GiCellarBarrels className="m-auto text-5xl text-gray-500 " />
          <p>pipes</p>
        </Link>
        <Link
          href={"/bulk"}
          className="flex-col gap-2 p-8 shadow-lg  bg-white rounded-lg hover:bg-blue-600 "
          style={{ backgroundColor: "#F6F6F6" }}
        >
          <LiaShirtsinbulk className="m-auto text-5xl text-gray-500 " />
          <p>bulk</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar