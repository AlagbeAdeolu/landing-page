import React from "react";

const CallToAction = () => {
  return (
    <div>
      <div className="py-10">
        <h2 className="uppercase text-sm font-bold">The kovac family story</h2>
      </div>
      <div className="text-gray-500 text-xl flex justify-between mb-10">
        <div className="w-1/2 border-b-2 border-t-2 py-8">
          <p className="">
            Camilla and Christopher Kovac is the force behind Sweden based
            furniture company,{" "}
            <span className="font-bold underline">Furni</span>, launched 1795,
            designing and providing products and services as environmentally
            friendly as possible.
          </p>
        </div>
        <div className="text-sm rotate-90">
          <p>May,2020 -------- 2023</p>
        </div>
      </div>

      <div>
        <p className="w-1/3 text-4xl text-gray-600 mb-6">
          The products are made in Stockholm, Sweden
        </p>
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-between">
            <p>
              The ambition is to make products with as small impact on the
              environment as possible, source materal and produce them locally.
              To be the world's most beloved furniture company, known for our
              innovative, high-quality products, exceptional customer service,
              and sustainable practices.
            </p>
            <p>
              This ambition statement is comprehensive, aspirational, and
              measurable. It also aligns with the company's values and mission.
              Innovative: The company is committed to developing new and
              innovative furniture products that meet the needs of its
              customers. High-quality: The company uses high-quality materials
              and construction methods to ensure that its furniture is built to
              last.
            </p>
          </div>

          <div>
            <p>
              Exceptional customer service: The company is committed to
              providing its customers with the best possible shopping
              experience, from the moment they enter the store to the moment
              their furniture is delivered. Sustainable practices: The company
              is committed to using sustainable materials and practices in its
              manufacturing and business operations.
            </p>
          </div>

          <div>
            <img className="h-[300px]" src="/assets/hero9.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
