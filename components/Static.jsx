import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import static1 from "../public/assets/crucified-pose.svg";
import static2 from "../public/assets/dancer-balance-posture-on-one-leg.svg";
import static3 from "../public/assets/dancer-motion.svg";

const Static = () => {
  return (
    <div className="py-16 px-5 md:px-0 ">
      <div className="flex items-center justify-center static w-full h-full md:w-[1236px] md:h-[274px] rounded-[30px] m-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 w-full max-w-6xl m-auto">

          <div className="flex items-center p-4 pt-10 md:pt-0  m-auto">
            <div className="flex flex-shrink-0 items-center justify-center  h-[75px] w-[75px] rounded-[20px] backdrop-opacity-10 backdrop-invert bg-white/30">
              <Image
                src={static1}
                alt="static1"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="flex-grow flex flex-col ml-4">
              <span className="text-lg text-white">
                Get that 11 line <br /> in 30 days
              </span>
              <div className="flex items-center">
                <span className="text-white opacity-50 mr-5">Learn more </span>{" "}
                <BsArrowRight className="text-white opacity-50" />
              </div>
            </div>
          </div>

          
          <div className="flex items-center p-4 m-auto">
            <div className="flex flex-shrink-0 items-center justify-center  h-[75px] w-[75px] rounded-[20px] backdrop-opacity-10 backdrop-invert bg-white/30">
              <Image
                src={static2}
                alt="static1"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="flex-grow flex flex-col ml-4">
              <span className="text-lg text-white">
                  14 Days <br />sherd challenge
              </span>
              <div className="flex items-center">
                <span className="text-white opacity-50 mr-5">Learn more </span>{" "}
                <BsArrowRight className="text-white opacity-50" />
              </div>
            </div>
          </div>

          
          <div className="flex items-center p-4 pb-10 md:pb-0 m-auto">
            <div className="flex flex-shrink-0 items-center justify-center  h-[75px] w-[75px] rounded-[20px] backdrop-opacity-10 backdrop-invert bg-white/30">
              <Image
                src={static3}
                alt="static1"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="flex-grow flex flex-col ml-4">
              <span className="text-lg text-white">
              Get flat belly <br />in 30 days
              </span>
              <div className="flex items-center">
                <span className="text-white opacity-50 mr-5">Learn more </span>{" "}
                <BsArrowRight className="text-white opacity-50" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <div className=" static md:w-[1236px] md:h-[274px] rounded-[30px] m-auto">
        <div className="grid md:grid-cols-3 md:gap-8 m-auto items-center justify-center text-center">
          <div className="flex m-auto items-center justify-center text-center">
            <div className="backdrop-invert bg-white/30 backdrop-opacity-20 backdrop-blur-md w-[75px] h-[75px] rounded-[20px] mt-10  m-auto items-center justify-center text-center">
              <Image
                src={static1}
                alt="static1"
                className="w-[50px] h-[50px] m-auto items-center justify-center text-center"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Static;
