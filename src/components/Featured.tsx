import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className=" w-max flex">
        {/* Single Item */}
        <div className="w-screen h-[60vh] flex flex-col items-center justify-around">
          {/* Image Container */}
          <div className="relative">
            <Image src="" alt="" fill />
          </div>
          {/* Text Container */}
          <div className="">
            <h1 className="">Title</h1>
            <p className="">Desc</p>
            <span className="">Price</span>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
