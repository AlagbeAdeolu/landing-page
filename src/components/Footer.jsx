import { Instagram, LinkedIn, Telegram, Twitter } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-[400px] w-full bg-gray-900 text-white py-10 px-2 mt-auto">
      <div  className="container mx-auto">
        <div className="flex flex-col gap-6 py-6 border-b border-gray-500">
          <div className="flex flex-col md:flex-row justify-between md:items-end">
            {/* Logo */}
            <div className="font-bold pb-4 md:pb-0 text-5xl tracking-wide">
              <h1>
                Furni<span className="text-green-400">.</span>
              </h1>
            </div>
            {/* Links */}
            <div className="">
              <div className="uppercase flex gap-4 text-gray-400 underline-offset-8">
                <Link to='/About' className="hover:underline hover:text-green-500">
                  About us
                </Link>
                <Link to={'/services'} className="hover:underline hover:text-green-500">
                  Services
                </Link>
                <Link to={'/shop'} className="hover:underline hover:text-green-500">
                  Shop
                </Link>
                <Link to={'/contact'} className="hover:underline hover:text-green-500">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex gap-2 mb-4 md:pb-0">
              <div className="cursor-pointer bg-gray-50 transition ease-in delay-100 text-green-500 rounded-full h-[40px] w-[40px] flex items-center justify-center p-[1.5rem] hover:text-gray-50 hover:bg-green-500  ">
                <Twitter />
              </div>
              <div className="cursor-pointer bg-gray-50 transition ease-in delay-100 text-green-500 rounded-full h-[40px] w-[40px] flex items-center justify-center p-[1.5rem] hover:text-gray-50 hover:bg-green-500  ">
                <Instagram />
              </div>
              <div className="cursor-pointer bg-gray-50 transition ease-in delay-100 text-green-500 rounded-full h-[40px] w-[40px] flex items-center justify-center p-[1.5rem] hover:text-gray-50 hover:bg-green-500  ">
                <LinkedIn />
              </div>
              <div className="cursor-pointer bg-gray-50 transition ease-in delay-100 text-green-500 rounded-full h-[40px] w-[40px] flex items-center justify-center p-[1.5rem] hover:text-gray-50 hover:bg-green-500  ">
                <Telegram />
              </div>
            </div>
            <div className="md:w-1/2 md:text-right text-lg font-thin">
              <p>
                "<span className="text-green-500">Quality</span> is never an
                accident. It is always the result of intelligent effort." - John
                Ruskin, English art critic and social reformer
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg mt-4">
            Copyright ©2023. All Rights Reserved - Coded by Adeolu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
