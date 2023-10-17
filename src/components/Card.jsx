import React from "react";

const Card = ({ name, role, stack }) => {
  return (
    <div>
      <div className=" border rounded-xl py-2 px-4 flex flex-col items-center justify-center">
        <div className="">
          <img
            className="object-cover rounded-full h-[100px] w-[100px]"
            src="/assets/hero8.jpg"
            alt=""
          />
        </div>
        <div className="text-center mt-4 ">
          <h1 className="text-lg font-semibold">Wade Wilson</h1>
          <h2 className="text-sm">CEO, Furni Industries</h2>
          <h2 className="text-xs font-dancingScript">Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
