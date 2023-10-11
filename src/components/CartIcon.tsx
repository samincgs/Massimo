import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <div className="flex items-center gap-4 mr-7">
      <div className="relative w-7 h-7">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart (3)</span>
    </div>
  );
};

export default CartIcon;
