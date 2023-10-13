"use client";
import React from "react";
import { Button } from "./ui/button";
import { useProductContext } from "@/context/productContext";
import { ProductValuesType } from "@/app/upload/UploadContainer";
import { CartItem } from "@/types/cart";
import { AddToCart } from "@/context/actions/client/cart";
import CartActionTypes from "@/context/actionTypes/cartActionTypes";

interface props {
  product: ProductValuesType;
  quantity: number;
}
const AddToCartButton: React.FC<props> = (props) => {
  const { state, dispatch } = useProductContext();
//   console.log(state,"AppState")
  const cart = state.cart;
  const { product, quantity } = props;
  const handleAddToCart = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()
    const cartItem: CartItem = {
      productId: product.id,
      quantity: quantity,
      product,
    };
    console.log("Add to button clicked")
    dispatch({
        type: CartActionTypes.ADD_TO_CART,
        payload: cartItem,
      });
    return
  };
  return (
    <div>
      <Button onClick={(e) => handleAddToCart(e)}>Add to Cart</Button>
    </div>
  );
};

export default AddToCartButton;
