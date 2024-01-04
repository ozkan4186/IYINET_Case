"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "../../../public/den.png";
import img2 from "../../../public/2.png";
import img3 from "../../../public/3.png";
import img4 from "../../../public/4.png";
import img1 from "../../../public/1.png";
import { FaSackXmark } from "react-icons/fa6";
import { GiCellarBarrels } from "react-icons/gi";

const Pipes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePredictionButtonClick = (e) => {
    e.preventDefault();

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <div
        className="container mx-auto my-9 sm:w-full md:w-3/4 lg:w-[56rem] leading-10  "
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
        <div className="flex flex-wrap cursor-pointer md:gap-40 ">
          <div>
            <GiCellarBarrels className="m-auto text-9xl text-gray-500 " />
          </div>
          <form action="" className="">
            <div className="flex gap-3 ">
              <div>
                <label className="text-gray-500 mb-5 " htmlFor="">
                  Product Name
                </label>{" "}
                <br />
                <input className="rounded-3xl px-5 w-full " type="text" />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="">
                  Color
                </label>
                <br />
                <input className="rounded-3xl bg-indigo-200 " type="text" />
              </div>
            </div>
            <div className="flex gap-3 ">
              <div>
                <label className="text-gray-500 mb-5 " htmlFor="">
                  Length
                </label>{" "}
                <br />
                <input
                  className="rounded-3xl w-32 text-right "
                  type="text"
                  placeholder="mm"
                />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="">
                  Width
                </label>{" "}
                <br />
                <input
                  className="rounded-3xl w-32 text-right "
                  type="text"
                  placeholder="mm"
                />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="">
                  Height
                </label>{" "}
                <br />
                <input
                  className="rounded-3xl w-32 pl-2 text-right "
                  type="text"
                  placeholder="mm"
                />
              </div>
            </div>
            <div className="flex gap-3 ">
              <div>
                <label className="text-gray-500 mb-5 " htmlFor="">
                  Weight
                </label>{" "}
                <br />
                <input
                  className="rounded-3xl w-32   text-right "
                  type="text"
                  placeholder="kg"
                />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="">
                  Quantity
                </label>{" "}
                <br />
                <input className="rounded-3xl w-32" type="text" />
              </div>
              <div className="flex gap-3 mt-5 ">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-44 h-10 mt-5 text-center rounded-3xl"
                  onClick={handlePredictionButtonClick}
                >
                  Prediction
                </button>
              </div>
              {isModalOpen && (
                <div
                  className="fixed inset-0 z-10 overflow-y-auto  "
                  onClick={handleOverlayClick}
                >
                  <div className="flex items-center justify-center md:mt-24 md:ml-72 min-h-screen">
                    <div className="fixed inset-0 bg-gray-500 opacity-75 overlay "></div>
                    <div className="relative bg-white  p-6 rounded-lg">
                      <div className="flex gap-16">
                        <div className="flex gap-3">
                          <h2>MAXİMUM CAPACİTY</h2>
                          <p className=" rounded-full ">?</p>
                        </div>
                        <button
                          className="text-2xl font-bold "
                          onClick={handleCloseModal}
                        >
                          x
                        </button>
                      </div>
                      <div className="flex gap-8">
                        <div>
                          <p>20 STANDART</p>
                        </div>
                        <div className="flex gap-3 justify-center ">
                          <p className="mt-2">
                            <FaSackXmark className=" text-lg text-gray-500 " />
                          </p>
                          <p>28230 Items</p>
                        </div>
                      </div>
                      <div className="flex gap-8">
                        <div>
                          <p>40 STANDART</p>
                        </div>
                        <div className="flex gap-3 justify-center ">
                          <p className="mt-2">
                            <FaSackXmark className=" text-lg text-gray-500 " />
                          </p>
                          <p>26700 Items</p>
                        </div>
                      </div>
                      <div className="flex gap-8">
                        <div>
                          <p>40 HİGH CUBE</p>
                        </div>
                        <div className="flex gap-3 justify-center ">
                          <p className="mt-2">
                            <FaSackXmark className=" text-lg text-gray-500 " />
                          </p>
                          <p>26460 Items</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto flex flex-col my-9 sm:flex-row sm:w-full md:w-3/4 lg:w-[56rem] leading-10">
        <div className="mb-6 sm:mb-0">
          <h1 className="text-lg sm:text-lg">
            <span className="text-blue-500">3.</span>
            <span className="text-blue-900 font-bold">SPACING SETTINGS ?</span>
          </h1>
          <div className="flex flex-wrap cursor-pointer gap-2">
            <div>
              <label>
                <input type="checkbox" /> Tilt to Length
              </label>
              <div className="flex justify-center gap-6">
                <div>
                  <GiCellarBarrels className="m-auto text-9xl text-blue-500 " />
                </div>
                <div className="mt-3">
                  <GiCellarBarrels className="m-auto text-9xl text-blue-500 " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-0 sm:ml-10">
          <h1 className="text-lg sm:text-lg">
            <span className="text-blue-500">4.</span>
            <span className="text-blue-900 font-bold">STUFFING SETTINGS</span>
          </h1>
          <div className="flex flex-wrap cursor-pointer gap-6  ">
            <div className="flex gap-2">
              <div className="md:mt-14">
                <GiCellarBarrels className="m-auto text-9xl text-blue-500 " />
              </div>
              <div className="flex-col gap-2">
                <label>
                  <input type="checkbox" /> Layers
                </label>
                <br />
                <input
                  className="rounded-3xl w-32 text-right"
                  type="text"
                  style={{
                    backgroundColor: "#F6F6F6",
                  }}
                />
              </div>
            </div>
            <div className="flex gap-2  ">
              <div className="md:mt-14">
                <GiCellarBarrels className="m-auto text-9xl text-blue-500 " />
              </div>
              <div className="flex-col gap-2">
                <label>
                  <input type="checkbox" /> Layers
                </label>
                <br />
                <input
                  className="rounded-3xl w-32 text-right"
                  type="text"
                  style={{
                    backgroundColor: "#F6F6F6",
                  }}
                  placeholder="kg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipes;
