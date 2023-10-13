"use client";

import { ProductValuesType } from "@/app/upload/UploadContainer";
import AddToCartButton from "@/components/AddtocartButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddToCart } from "@/context/actions/client/cart";
import { useProductContext } from "@/context/productContext";
import { CartItem } from "@/types/cart";
import React, { useState } from "react";

const SideBar = ({ product }: { product: ProductValuesType }) => {
  const [quantity, setQuantity] = useState(1);

  const { dispatch, state } = useProductContext();
  const cartId = state.cart.id;
  const AddItemToCart = async () => {
    const cartItem: CartItem = {
      productId: product.id,
      quantity: quantity,
      product,
    };
    console.log("add to cart");
    console.log(cartItem, "cartItemClicked");
    await AddToCart(cartId, cartItem, dispatch);
  };
  return (
    <div className="w-full mx-[7rem]">
      <div className="flex mx-auto gap-12 my-12 ">
        <div className="inline-flex items-end gap-3">
          <div className="text-[#ff4242] font-['Lato'] text-2xl font-bold leading-[130%]">
            {`$${product.price}`}
          </div>
          {/* Todo: Add later */}
          {/* <div className="price-old text-[#787a80] font-['Lato'] text-lg leading-[150%]">
            $31.00
          </div>
          <div>
            <div className="inline-flex items-center gap-2.5 pt-[0rem] pb-[0rem] py-px px-2 rounded bg-[#ff4242] text-white font-['Lato'] font-bold leading-[160%]">
              -50%
            </div>
          </div> */}
        </div>
        <div>Rating</div>
      </div>
      <div className="flex gap-12">
        <div className="w-[6rem]">
          <label htmlFor="size">Select Size</label>
          <Input id="size" />
        </div>
        <div>Size chart</div>
      </div>

      <div className="flex  items-center my-10 gap-12">
        <Input
          type="number"
          placeholder="1"
          min={1}
          className="w-[6rem]"
          onChange={(e) => setQuantity(+e.currentTarget.value)}
        />
        <AddToCartButton product={product} quantity={quantity} />
        <Button>Favorite</Button>
      </div>
    </div>
  );
};

export default SideBar;
