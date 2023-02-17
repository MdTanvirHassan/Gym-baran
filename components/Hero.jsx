import Image from "next/image";
import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Img from "../public/assets/hero.png";
//import Brands from "../public/assets/brands.png";
import Nike from "../public/assets/nike.png";
import Adidas from "../public/assets/adidas.png";
import Reebook from "../public/assets/Reebook.png";
import Puma from "../public/assets/puma.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="container w-full lg:max-w-[1279px] lg:max-h-[582px] m-auto">
      <section className="py-10">
        <div className=" m-auto grid py-24 md:grid-cols-2 gap-1 items-center justify-center px-6 md:px-0">
          <div className="mb-2 md:mb-0 items-center lg:ml-[51px]">
            <h1 className="text-[#262524] text-4xl md:text-6xl mb-1 md:w-[568px] md:h-[146px]  font-bold tracking-wider ">
              Healthy in side <br />
              <span className="text-[#8382EB]">fresh </span>out side
            </h1>
            <p className="my-2 text-[#262524] lg:w-[492px] md:h-[84px] tracking-wider text-[16px] text-justify leading-7 font-normal opacity-60">
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine.
            </p>
            <div className="flex py-4">
              <button className="inline-flex text-white text-start bg-[#264373] border-0 py-2.5 px-4 focus:outline-none hover:bg-indigo-900 rounded-md shadow-lg shadow-gray-400 hover:space-x-16 hover:md:space-x-28">
                <span>Get started</span>{" "}
                <FaChevronCircleRight className="text-white text-xl ml-14 md:ml-24 " />
              </button>
              <button className="ml-4 inline-flex text-[#264373] bg-white border-0 py-2.5 px-2 md:px-4 focus:outline-none hover:bg-gray-200 rounded-md  shadow-lg shadow-gray-400 space-x-1 md:space-x-2">
                <IoMdArrowDroprightCircle className="text-2xl" />
                <span className="">Learn more</span>
              </button>
            </div>

            <div className="brands mt-6">
              <div>Brands:</div>
              <div className="flex flex-row space-x-5 md:space-x-8 mb-2 w-full md:w-[463px] md:h-[64px] pt-4">
                {/* <Image
                  className="relative z-10 object-cover object-center rounded"
                  alt="brands"
                  src={Brands}
                  width={463}
                  height={64}
                /> */}
                <Image
                  className="w-[58.81px] h-[27.58px] cursor-pointer hover:scale-105"
                  alt="brands"
                  src={Nike}
                />

                <Image
                  className="w-[53.87px] h-[36.37px] cursor-pointer hover:scale-105"
                  alt="brands"
                  src={Adidas}
                />

                <Image
                  className="w-[80px] h-[41.52px] cursor-pointer hover:scale-105"
                  alt="brands"
                  src={Puma}
                />
                <Image
                  className="w-[119.7px] h-[39.6px] cursor-pointer hover:scale-105"
                  alt="brands"
                  src={Reebook}
                />
              </div>
            </div>
          </div>

          {/* right -hero */}
          <div className="m-auto ">
            <Image
              className="relative z-10 object-cover object-center rounded lg:ml-15"
              alt="hero"
              src={Img}
              width={584}
              height={580}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
