import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Img from "../public/assets/workout.png";

const Workout = () => {
  return (
    <div className="">
      <section className="container w-full lg:max-w-[1241px] lg:max-h-[497px] m-auto">
        <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mb-0">
            <Image
              className="relative z-10 object-cover object-center rounded"
              alt="workout"
              src={Img}
              width={571}
              height={496}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-start text-left ">
            <h1 className="sm:text-4xl text-3xl lg:w-[558px] lg:h-[146px] mb-2 tracking-wider text-gray-900">
              Best full body
              <br className="" />
              workout to lose fat
            </h1>
            <p className="mb-8 lg:w-[553px] lg:h-[112px]  text-[16px] leading-7 font-normal opacity-60">
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine. Even at home we still have to be diligent in exercising,
              either alone or with your friends at home.
            </p>
            <button className="inline-flex text-white text-start bg-[#264373] border-0 py-2.5 px-4 focus:outline-none hover:bg-indigo-900 rounded-md shadow-xl shadow-gray-400 hover:space-x-20">
              <span>Get started</span>{" "}
              <BsArrowRight className="text-white text-xl ml-14 md:ml-16" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workout;
