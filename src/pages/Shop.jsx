import React from "react";
import Card from "../components/Card";

const Shop = () => {
  const productArray = [
    {
      title: "Dining Set with stool",
      price: 1600,
      image: "/assets/hero1.jpg",
      description:
        " This ultra-soft and fluffy chair is like sitting on a cloud. With its plush cushioning and ergonomic design, it's perfect for relaxing after a long day or curling up with a good book.",
    },
    {
      title: "Cabinet with flowers",
      price: 500,
      image: "/assets/hero2.jpg",
      description: "This unique and stylish chair is shaped like a giant egg. It's made of durable fiberglass and features a comfortable cushion. The Egg Chair is perfect for adding a touch of whimsy to any room.",
    },
    {
      title: "Old Man's fireplace chair",
      price: 750,
      image: "/assets/hero3.jpg",
      description: "This fun and funky chair is suspended from the ceiling. It's the perfect place to relax and swing away your worries. The Hanging Chair is also great for reading, listening to music, or just taking a nap.",
    },
    {
      title: "Sofa for Netflix and Chill",
      price: 600,
      image: "/assets/hero4.jpg",
      description: "This comfy and casual chair is perfect for lounging around. It's filled with soft beads that mold to your body, providing ultimate comfort and support. The Beanbag Chair is also great for gaming, watching movies, or just relaxing.",
    },
    {
      title: "Reclining chair with slim hands",
      price: 200,
      image: "/assets/hero5.jpg",
      description: "This classic chair is perfect for relaxing and unwinding. With its gentle rocking motion, it's the perfect place to read a book, watch TV, or just take a nap. The Rocking Chair is also a great addition to any nursery.",
    },
    {
      title: "Minimal design art",
      price: 749.99,
      image: "/assets/hero6.jpg",
      description: "This rustic chair is perfect for sitting outdoors and enjoying the fresh air. It's made of durable wood and features a comfortable backrest and armrests. The Adirondack Chair is also great for rocking back and forth on a summer evening.",
    },
    {
      title: "Stylized comfy setee",
      price: 900,
      image: "/assets/hero9.jpg",
      description: "This iconic chair is perfect for adding a touch of Hollywood glamour to your home. It's made of durable canvas and features a foldable design. The Director's Chair is also great for using as a portable chair for camping, picnics, or other outdoor activities.",
    },
    {
      title: "Cushion with coffee table",
      price: 750,
      image: "/assets/hero8.jpg",
      description: "This luxurious chair is perfect for relaxing and sunbathing. It's long and slender design provides plenty of room to stretch out, and the adjustable backrest allows you to find the perfect angle for comfort. The Chaise Lounge is also great for napping or reading a book by the pool.",
    },
  ];
  return (
    <div className="container my-auto px-6 md:mx-auto text-center">
      <div className=" mx-auto mb-6 w-1/2">
        <h2 className="text-2xl font-bold border-b border-green-500 pb-2">
          Our Products
        </h2>
        <p>
          High quality materials straight from the valley of lebanon and crafted
          with care in Sweden.
        </p>
      </div>

      <div className="md:grid grid-cols-2 gap-4 my-10">
        {productArray.map((item, idx) => {
          return (
            <Card
              image={item.image}
              title={item.title}
              price={item.price}
              key={idx}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
