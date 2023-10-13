"use client";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useProductContext } from "@/context/productContext";
import Image from "next/image";
import React from "react";
import SidebarCopy from "./SideBarCopy";
import SideBar from "./SideBar";

const Page = ({ params }: { params: { id: string } }) => {
  const { state } = useProductContext();
  const product = state.products.find((product) => product.id === params.id);
  if (!product) {
    return <div>No product found</div>;
  }
  return (
    <div className="mx-[7rem]">
      <div>
        <h1 className="text-[#1e212c] font-['Lato'] text-5xl font-black leading-[130%]">
          {product.name}
        </h1>
      </div>
      <div className="bg-[#e5e8ed] h-1" />
      <div className="flex gap-[7em]">
        {/* Image and sideBar container */}
        <div className="w-[50rem] h-[35rem]">
          <Image
            src={product.image}
            width={1260}
            height={750}
            alt={product.name}
            className="w-[840px] h-[540px] px-5 py-5 rounded-[2rem]"
          />
        </div>
        {/* <SidebarCopy /> */}
        <SideBar product={product}/>
      </div>
    </div>
  );
};

export default Page;
