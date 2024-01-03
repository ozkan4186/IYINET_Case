import Image from "next/image";
import React from "react";
import img from "../../../public/den.png";

const Box = () => {
  return (
    <div>
      <div
        className="container mx-auto my-9 sm:w-full md:w-3/4 lg:w-[56rem] leading-10 "
        style={{
          backgroundColor: "#F6F6F6",
        }}
      >
        <div>
          <h1>
            <span className="text-blue-500">2.</span>{" "}
            <span className="text-blue-900 font-bold ">
              SELECT CARGO DİMENSİONS
            </span>
          </h1>
        </div>
        <div className="flex flex-wrap cursor-pointer gap-2 ">
          <div>
            <Image
              src={img}
              width={300}
              height={900}
              alt="Picture of the author"
            />
          </div>
          <form action="">
            <div className="flex gap-3 ">
              <div>
                <label className="text-gray-500 mb-5 " htmlFor="">
                  Product Name
                </label>{" "}
                <br />
                <input className="rounded-lg px-5 " type="text" />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="">
                  Color
                </label>
                <br />
                <input className="rounded-lg" type="text" />
              </div>
            </div>
            <div className="flex gap-3 ">
              <div>
                <label className="text-gray-500 mb-5 " htmlFor="">
                  Length
                </label>{" "}
                <br />
                <input className="rounded-lg w-32" type="text" />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="">
                  Width
                </label>{" "}
                <br />
                <input className="rounded-lg w-32" type="text" />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="">
                  Height
                </label>{" "}
                <br />
                <input className="rounded-lg w-32" type="text" />
              </div>
            </div>
            <div className="flex gap-3 ">
              <div>
                <label className="text-gray-500 mb-5 " htmlFor="">
                  Length
                </label>{" "}
                <br />
                <input className="rounded-lg w-32" type="text" />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="">
                  Width
                </label>{" "}
                <br />
                <input className="rounded-lg w-32" type="text" />
              </div>
              <div className="flex gap-3 mt-5 ">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-44 h-10 mt-5 text-center rounded-3xl">
                  Prediction
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto flex gap-8 my-9 sm:w-full md:w-3/4 lg:w-[56rem] ">
        <div>
          <h1>
            <span className="text-blue-500">3.</span>
            <span className="text-blue-900 font-bold ">
              SPACING SETTINGS ?{" "}
            </span>
          </h1>
          <div className="flex flex-wrap cursor-pointer gap-2 ">
            <div>
              <label>
                <input type="checkbox" checked /> Tilt to Length
              </label>
            </div>
          </div>
        </div>

        <div>
          <h1>
            <span className="text-blue-500">4.</span>
            <span className="text-blue-900 font-bold ">STUFFING SETTINGS</span>
          </h1>
        </div>
        <div className="flex flex-wrap cursor-pointer gap-2 "></div>
      </div>
    </div>
  );
};

export default Box;
