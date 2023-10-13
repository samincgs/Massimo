"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Deliciousness, right to your doorstep",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "We deliver your order wherever you are",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "The best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev == data.length - 1 ? 0 : prev + 1));
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Text Container */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold bg-fuchsia-50">
        <h1 className="text-5xl text-center p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* Image Container */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className=" object-cover"
        />
      </div>
    </div>
  );
};
export default Slider;
