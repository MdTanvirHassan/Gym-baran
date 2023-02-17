import Image from "next/image";
import React from "react";
import static1 from "../public/assets/gymnast-girl.svg";
import static2 from "../public/assets/man-doing-yoga.svg";
import static3 from "../public/assets/dancer-motion.svg";
import static4 from "../public/assets/man-doing-yoga-.svg";
import static5 from "../public/assets/person-practicing-a-strengthen-posture.svg";
import static6 from "../public/assets/yoga-posture-.png";

const Programs = () => {
  return (
    <div className="py-16 px-5 md:px-0 ">
        <h2 className="text-center py-14">Programs that can <br />be taken</h2>
      <div className="flex items-center justify-center  w-full h-full m-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-1 w-full max-w-6xl m-auto">

          <div className="flex items-center p-4  m-auto">
            <div className="flex flex-shrink-0 items-center justify-center  h-[75px] w-[75px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-cyan-500 to-blue-5200 hover:scale-105 shadow-lg shadow-gray-400">
              <Image
                src={static1}
                alt="static1"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="flex-grow flex flex-col ml-4">
              <span className="text-sm font-bold text-black">
                Get ABS in two weeks
              </span>
              <div className="flex items-center">
                <span className="text-[#262524] text-sm opacity-50 mr-5">Exercise is a very important need for our body. </span>
              </div>
            </div>
          </div>

          
          <div className="flex items-center p-4 m-auto">
            <div className="flex flex-shrink-0 items-center justify-center  h-[75px] w-[75px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-cyan-700 to-blue-200 hover:scale-105 shadow-lg shadow-gray-400">
              <Image
                src={static2}
                alt="static1"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="flex-grow flex flex-col ml-4">
              <span className="text-sm font-bold text-black">
              25 Mins full body workout
              </span>
              <div className="flex items-center">
                <span className="text-[#262524] text-sm opacity-50 mr-5">Exercise is a very important need for our body. </span>
              </div>
            </div>
          </div>

          
          <div className="flex items-center p-4 m-auto">
            <div className="flex flex-shrink-0 items-center justify-center  h-[75px] w-[75px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-purple-500 to-blue-300 hover:scale-105 shadow-lg shadow-gray-400">
              <Image
                src={static3}
                alt="static1"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="flex-grow flex flex-col ml-4">
              <span className="text-sm font-bold text-black">
              10 Mins toned arms workout
              </span>
              <div className="flex items-center">
                <span className="text-[#262524] text-sm opacity-50 mr-5">Exercise is a very important need for our body. </span>
              </div>
            </div>
          </div>

          <div className="flex items-center p-4 m-auto">
            <div className="flex flex-shrink-0 items-center justify-center  h-[75px] w-[75px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-purple-700 to-purple-300 hover:scale-105 shadow-lg shadow-gray-400">
              <Image
                src={static4}
                alt="static1"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="flex-grow flex flex-col ml-4">
              <span className="text-sm font-bold text-black">
              15 Mins full body fat burn
              </span>
              <div className="flex items-center">
                <span className="text-[#262524] text-sm opacity-50 mr-5">Exercise is a very important need for our body. </span>
              </div>
            </div>
          </div>

          
          <div className="flex items-center p-4  m-auto">
            <div className="flex flex-shrink-0 items-center justify-center  h-[75px] w-[75px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-blue-500 to-cyan-300 hover:scale-105 shadow-lg shadow-gray-400">
              <Image
                src={static5}
                alt="static1"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="flex-grow flex flex-col ml-4">
              <span className="text-sm font-bold text-black">
              25 Mins HIIT workout
              </span>
              <div className="flex items-center">
                <span className="text-[#262524] text-sm opacity-50 mr-5">Exercise is a very important need for our body. </span>
              </div>
            </div>
          </div>

          
          <div className="flex items-center p-4   m-auto">
            <div className="flex flex-shrink-0 items-center justify-center  h-[75px] w-[75px] rounded-full backdrop-opacity-10 backdrop-invert bg-gradient-to-r from-pink-600 to-pink-300 hover:scale-105 shadow-lg shadow-gray-400">
              <Image
                src={static6}
                alt="static1"
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="flex-grow flex flex-col ml-4">
              <span className="text-sm font-bold text-black">
              Intense lower Abs workout
              </span>
              <div className="flex items-center">
                <span className="text-[#262524] text-sm opacity-50 mr-5">Exercise is a very important need for our body. </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Programs