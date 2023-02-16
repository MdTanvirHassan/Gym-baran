import Image from "next/image";
import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
//import { BiCaretRightCircle } from "react-icons/bi";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Img from "../public/assets/image77.png";
import Brands from "../public/assets/brands.png";

const Hero = () => {
  return (
    <div id="hero" className="md:max-w-[1279px] md:max-h-[582px] m-auto">
      <section className="">
        <div className=" m-auto grid py-24 md:grid-cols-2 gap-2 items-center justify-center px-6 md:px-10">

          <div className="mb-4 md:mb-0 items-center md:ml-[81px]">
            <h1 className="text-[#262524] text-4xl md:text-6xl mb-1 md:w-[568px] h-[146px]  font-bold tracking-widest ">
              Healthy in side <br />
              <span className="text-[#8382EB]">fresh </span>out side
            </h1>
            <p className="mb-8 text-[#262524] tracking-wider text-[16px] text-justify leading-7 font-normal">
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine.
            </p>
            <div className="flex py-4">
              <button className="inline-flex text-white text-start bg-[#264373] border-0 py-2.5 px-4 focus:outline-none hover:bg-indigo-900 rounded-md shadow-lg shadow-gray-400">
                <span>Get started</span>{" "}
                <FaChevronCircleRight className="text-white text-xl ml-8 md:ml-16" />
              </button>
              <button className="ml-4 inline-flex text-[#264373] bg-white border-0 py-2.5 px-4 focus:outline-none hover:bg-gray-200 rounded-md  shadow-lg shadow-gray-400 space-x-2">
                <IoMdArrowDroprightCircle className="text-2xl" />
                <span className="">Learn more</span>
              </button>
            </div>

            <div className="brands my-4">
              <div>Brands:</div>
              <div className=" my-4">
                <Image
                  className="relative z-10 object-cover object-center rounded"
                  alt="brands"
                  src={Brands}
                  width={463}
                  height={64}
                />
              </div>
            </div>
          </div>
          <div className="m-auto">
            <Image
              className="relative z-10 object-cover object-center rounded py-8"
              alt="hero"
              src={Img}
              width={358}
              height={580}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
