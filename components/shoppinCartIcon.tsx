"use client";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useProductContext } from "@/context/productContext";

const ShoppingCartIcon = () => {
  const { state } = useProductContext();
  const cart = state?.cart?.cartItems?.length || 0;
  return (
    <div className="relative">
      <ShoppingCart />
      {cart > 0 && (
        <div className="absolute -top-1 w-4 h-4 rounded-full bg-red-400 text-white text-center -right-2 text-xs ">
          {cart}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
