import React from "react";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    // <div className="bg-gray-900 mt-6 text-white">
    //   <div className="container mx-auto py-6">
    //     <div className="grid grid-cols-2 h-[70%]">
    //       <div className="px-6 my-auto">
    //         <div>
    //           <h1 className="font-bold text-6xl pb-6">
    //             Poetic Brilliance, Modern Designs
    //           </h1>
    //           <p className="font-thin text-xl pb-6">
    //             Made with eco-conciousness today and for the future. The
    //             products are named after the parts used and mare made in Sweden
    //             using the best of materials.
    //           </p>
    //           <div className="flex max-w-[400px] gap-4 font-semibold text-lg">
    //             <button className="rounded-full bg-gray-900 text-white px-[30px] py-[12px] border flex-1 ">
    //               Shop Now
    //             </button>
    //             <button className="rounded-full px-[30px] py-[12px] border flex-1">
    //               Explore
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="h-[60vh] w-full border-gray-600 rounded-full">
    //         <img
    //           src="/assets/hero1.jpg"
    //           alt="hero-image1"
    //           className="h-full w-full object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto">
      <div className="my-auto mx-auto flex flex-col justify-center items-center pb-10">
        <h1 className="text-9xl mt-6">Furni</h1>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="">
            <div className="flex justify-around gap-4 mt-12 mx-auto  ">
              <img src="/assets/hero1.jpg" className="h-[400px] " alt="" />
              <img src="/assets/hero2.jpg" className="h-[400px] " alt="" />
              <img src="/assets/hero3.jpg" className="h-[400px] " alt="" />
              <img src="/assets/hero4.jpg" className="h-[400px] " alt="" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-center text-lg w-[40rem]">
              Made with eco-conciousness today and for the future. The products
              are named after the parts used and mare made in Sweden using the
              best of materials.
            </p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="">
        <CallToAction />
      </div>
    </div>
  );
};

export default Home;
