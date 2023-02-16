import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLogo from "../public/assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#000000");
  // const [position, setPosition] = useState('fixed')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 40) {
        setShadow(true);
        setNavBg("#ffffff");
        setLinkColor("#000000");
      } else {
        setShadow(false);
        setNavBg("transparent");
        setLinkColor("#000000");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed w-full  h-[90px] shadow-md shadow-gray-400 z-[100] ease-in-out duration-300 m-auto"
            : "fixed w-full h-[90px] z-[100] m-auto"
        }>
        <div className="flex justify-between items-center w-[1246px] h-[50px] px-1 2xl:px-16 md:mt-[42px] m-auto">
          <Link href="/">
            <div className="mx-20 flex space-x-2"
                style={{ backgroundColor: `${shadow}` }}>
              <Image
                src={NavLogo}
                alt="nav-logo"
                width="141"
                height="38"
                className="cursor-pointer m-auto mt-6"
              />
              
            </div>
          </Link>
          <div>
            <ul
              style={{ color: `${linkColor}` }}
              className="hidden md:flex space-x-8 mx-10">
              <li className="ml-7 text-bold  ">
                <Link href="/">Home</Link>
              </li>
              <li className="ml-7 text-bold  ">
                <Link href="/#program">Program</Link>
              </li>
              <li className="ml-7 text-bold  ">
                <Link href="/#blog">Blog</Link>
              </li>
              <li className="ml-7 text-bold  ">
                <Link href="/#about">About us</Link>
              </li>

              <li className="ml-7 text-bold  ">
                <Link href="/#login">
                    <button type="button" className="bg-[#264373] text-white w-[114px] h-[50px] rounded-xl -mt-5">Log in</button>
                    </Link>
              </li>
            </ul>
            {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className="md:hidden rounded-full bg-gray-600 p-2">
              <AiOutlineMenu size={25} className="text-white" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }>
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <div className={
                  shadow
                    ? "cursor-pointer bg-gray-200 px-1 py-2 rounded-md"
                    : "cursor-pointer"
                }>
                    <Image src={NavLogo} width="141" height="38" alt="/" />
                  </div>
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                  <AiOutlineClose className="text-black" />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#program">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Program
                  </li>
                </Link>
                <Link href="/#blog">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Blog
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About us
                  </li>
                </Link>

                <Link href="/#login">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Log in
                  </li>
                </Link>
                
              </ul>
              <div className="pt-32"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
