"use client";
import React from "react";
import CartItemCard from "./cartItemCard";
import CardDetailsForm from "./CardDetailsForm";
import { Button } from "@/components/ui/button";
import { useProductContext } from "@/context/productContext";
import Link from "next/link";

const Page = () => {
  const { state } = useProductContext();
  const cart = state.cart;
  const cartLength = cart && cart.cartItems?.length || 0
  let subtotal:number
  subtotal = 0
  cartLength > 0 && cart.cartItems.forEach(cartItem => {
    subtotal += cartItem.quantity * cartItem.product.price
  })
  return (
    <div className=" flex w-[80rem]  mx-auto border border-slate-200 rounded-[0.9rem] justify-between">
      <div>
        <div className="flex justify-between pt-12">
          <Link href="/" className="hover:text-red-300">
            <h1 className="text-[#1E1E1E] text-lg font-semibold pl-14">
              Shopping Continue
            </h1>
          </Link>
          <p>{cart.userId}</p>
        </div>
        <div className="w-[38rem] h-0.5 bg-[#d0cfcf] ml-14 mt-4" />
        <div className="flex flex-col ml-[3.5rem] mt-[2rem]">
          <h2 className="text-lg font-medium leading-[normal]">
            Shopping cart
          </h2>
          <p className="text-sm font-medium leading-[normal]">
            You have <span>{cartLength}</span> items in the cart
          </p>
        </div>
        <div className="flex flex-col gap-5 ml-12 my-5">
          {cartLength > 0 &&
            cart.cartItems.map((c) => (
              <CartItemCard key={c.productId} cartItem={c} />
            ))}

          {/* <CartItemCard />
          <CartItemCard />
          <CartItemCard /> */}
        </div>
      </div>
      <div className="my-[3rem] mr-[2.3rem] rounded-[1.25rem] bg-[#565abb] w-[24.5rem]">
        <div className="text-xl font-semibold text-[#fefefe] leading-[normal] mt-[1.8rem] ml-[1.2rem]">
          Card details
        </div>
        <div className="mx-[1.2rem] my-5">
          <CardDetailsForm />
        </div>
        <div className="w-[calc(100%-4rem)] bg-[#5f65c3] h-[2px] mx-auto" />
        <div className="flex flex-col gap-y-4 mt-4 mx-5 text-[#fefcfc]">
          <div className="flex justify-between items-center">
            <div>Subtotal</div>
            <div>${`${subtotal}`}</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Shipping</div>
            <div>$4</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Total(Tax incl.)</div>
            <div>$1672</div>
          </div>
        </div>
        {/* Checkout button */}

        <Button type="submit" className="mx-8 my-12 w-[80%]">
          checkout
        </Button>
      </div>
    </div>
  );
};

export default Page;
