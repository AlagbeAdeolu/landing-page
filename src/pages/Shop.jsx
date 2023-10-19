import React from "react";
import Card from '../components/Card'

const Shop = () => {
  const productArray = [
    {title: "Dining Set with stool", price: 1600, image: '/assets/hero1.jpg'},
    {title: "Cabinet with flowers", price: 500, image: '/assets/hero2.jpg'},
    {title: "Old Man's fireplace chair", price: 750, image: '/assets/hero3.jpg'},
    {title: "Sofa for Netflix and Chill", price: 600, image: '/assets/hero4.jpg'},
    {title: "Reclining chair with slim hands", price: 200, image: '/assets/hero5.jpg'},
    {title: "Minimal design art", price: 749.99, image: '/assets/hero6.jpg'},
    {title: "Stylized comfy setee", price: 900, image: '/assets/hero7.jpg'},
    {title: "Cushion with coffee table", price: 750, image: '/assets/hero8.jpg'},
  ]
  return (
    <div className="container my-auto mx-auto text-center">
      <div className=" mx-auto mb-6 w-1/2" >
        <h2 className="text-2xl font-bold border-b border-green-500 pb-2">
          Our Produts
        </h2>
        <p>
          High quality materials straight from the valley of lebanon and crafted
          with care in Sweden.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 my-10">
        {productArray.map((item, idx) => {
          return <Card image={item.image} title={item.title} price={item.price} key={idx}  />
        })} 
      </div>
    </div>
  );
};

export default Shop;
