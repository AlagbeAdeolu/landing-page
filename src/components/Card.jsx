import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, price, stack, image }) => {
  return (
    <div>
      <div className="py-10 border rounded-xl px-4 flex flex-col items-center justify-center">
        <div className='overflow-hidden'>
          <img
            className={`transform transition-transform scale-100 hover:scale-110 hover:amimate-zoom-out duration-300 object-cover  h-[250px] w-[200px]`}
            src={image}
            alt={title}
          />
        </div>
        <div className="text-center mt-4 ">
          <h1 className="text-sm font-semibold capitalize">{title}</h1>
          <h2 className="text-base">${price}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
