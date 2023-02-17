import Image from "next/image";
import React from "react";
import Img from "../public/assets/works.png";

const Works = () => {
  return (
    <div className="">
      <section className="">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mb-0">
            <Image
              className="relative z-10 object-cover object-center rounded"
              alt="workout"
              src={Img}
              width={605}
              height={444}
            />
          </div>
          <div className=" flex flex-col items-start text-left lg:-mt-44 mx-auto">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium mx-auto text-center text-gray-900">
              How it works?
            </h1>
            <div className="flex flex-wrap lg:w-[461px] lg:h-[28px] mx-auto sm:mb-2 ">
              <div className="p-2 w-full">
                <div className="bg-white shadow-lg shadow-gray-300 rounded-md flex p-4 h-full items-center">
                  <span className="font-medium">
                    The body becomes sick because of rarely exercise
                  </span>
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="bg-white opacity-60 shadow-lg shadow-gray-300 rounded-md flex p-4 h-full items-center">
                  <span className="font-medium">
                    Don't give up in order to get a healthy and ideal body
                  </span>
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="bg-white opacity-60 shadow-lg shadow-gray-300 rounded-md flex p-4 h-full items-center">
                  <span className="font-medium">
                    Become addicted to the exercise that is given
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
