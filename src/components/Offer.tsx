import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row">
      {/* Text Container */}
      <div className="flex-1 text-white flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-5xl font-bold xl:text-6xl">
          Delicious Burger & Frency Fries
        </h1>
        <p className="xl:text-xl">
          Progressively simplify effective e-toilers and process-centric method
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="flex-1 w-full relative">
        <Image
          src="/offerProduct.png"
          alt=""
          fill
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
