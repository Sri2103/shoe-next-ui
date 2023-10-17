"use client";
import React from "react";
import { Button } from "./ui/button";
import { useProductContext } from "@/context/productContext";
import { ProductValuesType } from "@/app/upload/UploadContainer";
import { CartItem } from "@/types/cart";
import { AddToCart } from "@/context/actions/client/cart";
import CartActionTypes from "@/context/actionTypes/cartActionTypes";
import { toast, useToast } from "./ui/use-toast";

interface props {
  product: ProductValuesType;
  quantity: number;
}
const AddToCartButton: React.FC<props> = (props) => {
  const { toast } = useToast();
  const { state, dispatch } = useProductContext();
  const cart = state.cart;
  const { product, quantity } = props;
  const handleAddToCart = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const cartItem: CartItem = {
      productId: product.id,
      quantity: quantity,
      product,
    };

    
     AddToCart(cart.id, cartItem)
      .then(() =>
        toast({
          title: "Product added",
          description: `${cartItem.product.name}`,
        })
      )
      .then(() =>
        dispatch({
          type: CartActionTypes.ADD_TO_CART,
          payload: cartItem,
        })
      ).catch(e => console.error(e,"Error adding to cart"))

    return;
  };
  return (
    <div>
      <Button onClick={(e) => handleAddToCart(e)}>Add to Cart</Button>
    </div>
  );
};

export default AddToCartButton;
