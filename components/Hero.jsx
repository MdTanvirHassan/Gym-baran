import Image from "next/image";
import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import hero from "../public/assets/hero.png";
import Img from "../public/assets/image77.png";
import Circle from "../public/assets/circle.png";
import Vector from "../public/assets/vector.png";
import Curve from "../public/assets/curve2.png";
//import Brands from "../public/assets/brands.png";
import Nike from "../public/assets/nike.png";
import Adidas from "../public/assets/adidas.png";
import Reebook from "../public/assets/Reebook.png";
import Puma from "../public/assets/puma.png";
import Static1 from "../public/assets/dancer-motion.svg";
import Static2 from "../public/assets/stretching.svg";
import Static3 from "../public/assets/person-practicing-a-strengthen-posture.svg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="container w-full lg:max-w-[1279px] lg:max-h-[582px] m-auto">
      <section className="py-10">
        <div className=" m-auto grid py-24 lg:grid-cols-2 gap-1 items-center justify-center px-6 lg:px-0">
          <div className="mt-6 my-auto md:mb-0 items-center lg:ml-[51px]">
            <h1 className="mt-12 text-[#262524] text-[28px] leading-[39.2px] md:text-[56px] md:leading-[73px] mb-1 lg:w-[568px] lg:h-[146px]  font-bold tracking-wider ">
              Healthy in side <br />
              <span className="text-[#8382EB]">fresh </span>out side
            </h1>
            <p className="py-4 text-[#262524] lg:w-[492px] lg:h-[84px] tracking-wider text-[16px] text-justify leading-7 font-normal opacity-60">
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine.
            </p>
            <div className="flex py-10 mb-">
              <button className="inline-flex text-white text-start bg-[#264373] border-0 py-2.5 px-4 focus:outline-none hover:bg-indigo-900 rounded-md shadow-lg shadow-gray-400 hover:space-x-16 hover:md:space-x-28">
                <span>Get started</span>{" "}
                <FaChevronCircleRight className="text-white text-xl ml-8 md:ml-24 " />
              </button>
              <button className="ml-4 inline-flex text-[#264373] bg-white border-0 py-2.5 px-2 md:px-4 focus:outline-none hover:bg-gray-200 rounded-md  shadow-lg shadow-gray-400 space-x-1 md:space-x-2">
                <IoMdArrowDroprightCircle className="text-2xl" />
                <span className="">Learn more</span>
              </button>
            </div>

            <div className="brands pt-4">
              <div className="my-8">Brands:</div>
              <div className="flex flex-row space-x-4 md:space-x-8 mb-2 w-full lg:w-[463px] md:h-[64px] pt-4">
                
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
          <div className="lg:hidden m-auto mt-5">
            <Image
              className=" relative z-10 object-cover object-center rounded lg:ml-15"
              alt="hero"
              src={hero}
              width={584}
              height={580}
            />
          </div>

          <div className="hidden lg:block relative m-auto w-[342.34px] h-[340px]  lg:w-[584px] lg:h-[580px] items-center justify-center">
            <div className="">
              <Image 
                className="absolute m-auto w-[254.41px] h-[254.41px] lg:w-[434px] lg:h-[434px] bottom-0  lg:ml-28" 
                alt="hero" 
                src={Circle} 
                // width="" 
                // height="" 
                />
            
              <Image 
                className="absolute m-auto w-[230.8px] h-[266.02px] lg:w-[393.72px] lg:h-[453.81px] bottom-0 lg:ml-28" 
                alt="hero" 
                src={Curve} 
                // width="" 
                // height=""
                />
            
              <Image className=" absolute m-auto w-[250.31px] h-[189.34px] lg:w-[427px] lg:h-[323px] bottom-0 lg:ml-28"
                alt="hero" 
                src={Vector} 
                // width="" 
                // height=""
                 />
            </div>
            <div className="relative">
            <Image
              className="absolute  lg:-top-0 2xl:-top-0 w-[209.86px] h-[340px] lg:w-[358px] lg:h-[580px] 2xl:h-[580px] bottom-0  lg:ml-[166px] right-"
              alt="hero"
              src={Img}
              // width=''
              // height=''
            />
            </div>
            <div className="relative z-10 ">
                {/*static1 members */}
                <div className="relative z-10 flex items-center p-2  m-auto w-[187px] h-[80px] bg-white rounded-[10px] shadow-xl top-20 right-44">

                  <div className="flex flex-shrink-0 items-center justify-center  h-[60px] w-[60px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-orange-400 to-orange-200 hover:scale-105 shadow-lg shadow-gray-400">
                    <Image
                      src={Static1}
                      alt="static1"
                      className="w-[35px] h-[35px]"
                    />
                  </div>
                  <div className="flex-grow flex flex-col ml-4 hover:scale-105">
                    <span className="text-sm font-bold text-black">
                      150+ 
                    </span>
                    <div className="flex items-center">
                      <span className="text-[#262524] text-sm opacity-50 mr-5">Members </span>
                    </div>
                  </div>
                </div>

                {/* static2 */}
                <div className="relative z-10 top-2 ml-[510px] ">
                  <div className="flex flex-shrink-0 items-center justify-center  h-[60px] w-[60px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-blue-400 to-blue-200 hover:scale-105 shadow-lg shadow-gray-400 ">
                      <Image
                        src={Static2}
                        alt="static2"
                        className="w-[35px] h-[35px]"
                      />
                    </div>
                  </div>

                  {/* static3 */}
                <div className="relative z-10 top-64 ml-8 ">
                  <div className="flex flex-shrink-0 items-center justify-center  h-[60px] w-[60px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-purple-600 to-purple-300 hover:scale-105 shadow-lg shadow-gray-400 ">
                      <Image
                        src={Static3}
                        alt="static3"
                        className="w-[35px] h-[35px]"
                      />
                    </div>
                  </div>

                  {/* static4 */}
                  <div className="relative z-10 items-center pt-5  m-auto w-[187px] h-[157px] bg-white rounded-[10px] shadow-xl top-40 left-56">

                  <div className=" items-center justify-center m-auto h-[60px] w-[60px] rounded-full backdrop-opacity-10 backdrop-invert bg-purple-500 to-orange-200 hover:scale-105 shadow-lg shadow-gray-400">
                    {/* <Image
                      src={Static1}
                      alt="static1"
                      className="w-[35px] h-[35px]"
                    /> */}
                  </div>
                  <div className=" ml-4 py-2 m-auto hover:scale-105">
                    <span className="text-sm font-bold text-black text-center ml-5 m-auto">
                    Zaqky Simorang
                    </span>
                    <div className="flex items-center">
                      <span className="text-[#262524] text-sm opacity-50 m-auto">Trainer</span>
                    </div>
                  </div>
                </div>
                  
                

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
