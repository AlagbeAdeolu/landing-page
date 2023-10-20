import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, price, stack, image, description }) => {
  return (
    <div className="">
      <div className="rounded-xl mt-8 bg-red-200 flex flex-col md:flex-row items-center justify-center max-w-[666px]">
        {/* Image */}
        <div className='md:w-1/2 border-sm overflow-hidden h-auto'>
          <img
            className={`rounded-xl md:rounded-l-xl transform transition-transform scale-100 object-cover  hover:scale-110 duration-500 h-full w-full`}
            src={image}
            alt={title}
          />
        </div>
        {/* details */}
        <div className="md:w-1/2 p-8 text-left">
          <h1 className="text-xl font-Mooli font-semibold capitalize mb-6">{title}</h1>
          <p className="text-xs mb-7 text-[hsl(228,12%,48%)] leading-4 ">{description}</p>
          <div className="flex items-center justify-center gap-6 mb-7">
          <h2 className="text-lg text-gray-600 font-bold">${price}</h2>
          <h2 className="text-base line-through text-[hsl(228,12%,48%)]">${price}</h2>

          </div>
          <button className="w-full border-none outline-none bg-[hsl(158,36%,37%)] text-white flex justify-center items-center gap-4 px-8 py-4 rounded-xl">
            <ShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
