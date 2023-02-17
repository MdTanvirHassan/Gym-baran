import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Img from "../public/assets/workout.png";

const Morning = () => {
  return (
    <div>
      <section className="container w-full lg:max-w-[1279px] lg:max-h-[582px] m-auto">
        <div className="mx-auto flex px-5 py-24 md:flex-row flex-col ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-16 md:mb-0 ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Daily morning 
              <br className="" />
               workout in home
            </h1>
            <p className="mb-8 leading-relaxed">
            Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. 
            </p>
            <button className="inline-flex text-white text-start bg-[#264373] border-0 py-2.5 px-4 focus:outline-none hover:bg-indigo-900 rounded-md shadow-xl shadow-gray-400 hover:space-x-20">
              <span>Get started</span>{" "}
              <BsArrowRight className="text-white text-xl ml-14 md:ml-16" />
            </button>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
              className="relative z-10 object-cover object-center rounded"
              alt="workout"
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

export default Morning;
