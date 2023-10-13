"use client";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useProductContext } from "@/context/productContext";
import Image from "next/image";
import React from "react";

const PageCopy = ({ params }: { params: { id: string } }) => {
  const { state } = useProductContext();
  const product = state.products.find((product) => product.id === params.id);
  if (!product) {
    return <div>No product found</div>;
  }
  return (
    <div>
      <div className="flex  justify-around">
        {/* Main container for product page */}
        {/* Image box */}
        <div>
          <Image
            src={product.image}
            width={600}
            height={1000}
            alt={product.id}
            className="w-auto h-[480px]"
          />
        </div>
        {/* Details Box */}
        <div className="flex flex-col border-2 border-gray-400 justify-between items-center">
          <div className="flex flex-col gap-y-4 pt-8">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p><span>$</span>{product.price}</p>
          </div>
          <div>
            <div className="flex gap-x-6 pb-12 px-6">
              <p>Quantity:</p>
              <input
                type="text"
                className="w-8 h-8 bg-gray-200 rounded-lg text-center outline-none"
                placeholder="0"
              />
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCopy;
