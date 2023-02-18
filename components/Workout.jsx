import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import workout from "../public/assets/workout.png";
import Img from "../public/assets/image78.png";
import Circle from "../public/assets/circle2.png";
import Vector from "../public/assets/vector35.jpg";
import Curve from "../public/assets/curve3.png";
import Static1 from "../public/assets/dancer-motion.svg";
import Static2 from "../public/assets/stretching.svg";
import Static3 from "../public/assets/crucified-pose.svg";

const Workout = () => {
  return (
    <div className="">
      <section className="container w-full lg:max-w-[1241px] lg:max-h-[497px] m-auto">
        <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mb-0">
            <div className="lg:hidden block">
            <Image
              className="relative z-10 object-cover object-center rounded"
              alt="workout"
              src={workout}
              width={571}
              height={496}
            />
            </div>
            <div className="hidden lg:block relative m-auto w-[571px] h-[496.38px]  lg:w-[584px] lg:h-[580px] items-center justify-center">
              <div className="">
                <Image
                  className="absolute m-auto w-[254.41px] h-[254.41px] lg:w-[381px] lg:h-[381px] bottom-24 right-10 "
                  alt="hero"
                  src={Circle}
                  // width=""
                  // height=""
                />

                <Image
                  className="absolute m-auto w-[230.8px] h-[266.02px] lg:w-[381px] lg:h-[439.14px] bottom-24 right-10 "
                  alt="hero"
                  src={Curve}
                  // width=""
                  // height=""
                />

                <Image
                  className=" absolute m-auto w-[250.31px] h-[189.34px] lg:w-[414.08px] lg:h-[307.39px] bottom-24 left-16 "
                  alt="vector"
                  src={Vector}
                  // width=""
                  // height=""
                />
              </div>
              <div className="relative">
                <Image
                  className="absolute  lg:-top-0 2xl:-top-0 w-[209.86px] h-[340px] lg:w-[416px] lg:h-[496px] bottom-0 right-20"
                  alt="hero"
                  src={Img}
                  // width=''
                  // height=''
                />
              </div>
              <div className="relative z-10 ">
                {/*static1  */}
                <div className="relative z-10 top-6 ml-32 ">
                  <div className="flex flex-shrink-0 items-center justify-center  h-[60px] w-[60px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-pink-500 to-pink-300 hover:scale-105 shadow-lg shadow-gray-400 ">
                    <Image
                      src={Static1}
                      alt="static1"
                      className="w-[35px] h-[35px]"
                    />
                  </div>
                </div>

                {/* static2 */}
                <div className="relative z-10 top-48 ml-[530px] ">
                  <div className="flex flex-shrink-0 items-center justify-center  h-[60px] w-[60px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-blue-400 to-blue-200 hover:scale-105 shadow-lg shadow-gray-400 ">
                    <Image
                      src={Static2}
                      alt="static2"
                      className="w-[35px] h-[35px]"
                    />
                  </div>
                </div>

                {/* static3 */}

                <div className="relative z-10 flex items-center p-2  m-auto w-[187px] h-[80px] bg-white rounded-[10px] shadow-xl top-64 right-44">
                  <div className="flex flex-shrink-0 items-center justify-center  h-[60px] w-[60px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-blue-400 to-blue-200 hover:scale-105 shadow-lg shadow-gray-400">
                    <Image
                      src={Static3}
                      alt="static3"
                      className="w-[35px] h-[35px]"
                    />
                  </div>
                  <div className="flex-grow flex flex-col ml-4 hover:scale-105">
                    <span className="text-sm font-bold text-black">
                      800 kall
                    </span>
                    <div className="flex items-center">
                      <span className="text-[#262524] text-sm opacity-50 mr-5">
                        Burn fat
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
