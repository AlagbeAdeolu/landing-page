import { Person2Outlined, ShoppingBagOutlined } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center text-xl h-[10%] mt-6">
      {/* Logo */}
      <div className="font-bold text-5xl tracking-wide">
        <h1>
          Furni<span className="text-green-400">.</span>
        </h1>
      </div>
      {/* Links */}
      <div className="hidden lg:flex justify-between gap-12 font-semibold underline-offset-8">
        <div className="">
          <NavLink to={'/'} className={({isActive}) => isActive ? "border-b-4  border-green-500 pb-2 " : "opacity-50"}>Home</NavLink>
        </div>
        <div>
          <NavLink to={'/Shop'} className={({isActive}) => isActive ? "border-b-4  border-green-500 pb-2" : "opacity-50"}>Shop</NavLink>
        </div>
        <div>
          <NavLink to={'/About'} className={({isActive}) => isActive ? "border-b-4  border-green-500 pb-2" : "opacity-50"}>About Us</NavLink>
        </div>
        <div>
          <NavLink to={'/Services'} className={({isActive}) => isActive ? "border-b-4  border-green-500 pb-2" : "opacity-50"}>Services</NavLink>
        </div>
        <div>
          <NavLink to={'/Contact'} className={({isActive}) => isActive ? "border-b-4  border-green-500 pb-2" : "opacity-50"}>Contact Us</NavLink>
        </div>
        <div className="flex text-2xl items-center justify-center gap-4 opacity-50">
          <Person2Outlined />
          <ShoppingBagOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;
