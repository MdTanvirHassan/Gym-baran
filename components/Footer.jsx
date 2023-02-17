import Image from "next/image";
import React from "react";
import Logo from "../public/assets/footer.png";

const Footer = () => {
  return (
    <div className="pt-8">
      <footer className="bg-[#1C3764] text-white">
        <div className="container px-5 py-16 mx-auto flex  lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 mx-4 md:mx-auto text-left">
            <a className=" justify-start text-white">
              <Image
                src={Logo}
                alt="footer-logo"
                className="-mt-9 -ml-12"
                width={141}
                height={38}
              />
              <p className=" text-sm text-[#FFFFFF] opacity-50 -mt-8">
                We take care of your health with regular and fun exercise
              </p>
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-start">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-white text-sm tracking-widest mb-3">
                Program
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#FFFFFF] opacity-50 hover:opacity-100 hover:text-white text-sm">
                    Workout
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFF] opacity-50 hover:opacity-100 hover:text-white text-sm">
                    Gym
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFF] opacity-50 hover:opacity-100 hover:text-white text-sm">
                    Cardio
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFF] opacity-50 hover:opacity-100 hover:text-white text-sm">
                    Zumba
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-white text-sm tracking-widest mb-3">
                Blog
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#FFFFFF] opacity-50 hover:opacity-100 hover:text-white text-sm">
                    Daily stretch
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFF] opacity-50 hover:opacity-100 hover:text-white text-sm">
                    Daily workout
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-white text-sm tracking-widest mb-3">
                About Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#FFFFFF] opacity-50 hover:opacity-100 hover:text-white text-sm">
                    Support
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFF] opacity-50 hover:opacity-100 hover:text-white text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFF] opacity-50 hover:opacity-100 hover:text-white text-sm">
                    Address
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-white text-sm tracking-widest mb-3">
                Blog
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#FFFFFF] opacity-50 hover:opacity-100 hover:text-white text-sm">
                    Daily stretch
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFF] opacity-50 hover:opacity-100 hover:text-white text-sm">
                    Daily workout
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
