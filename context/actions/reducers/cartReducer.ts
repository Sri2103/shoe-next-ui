import CartActionTypes from "@/context/actionTypes/cartActionTypes";
import { Cart, CartItem } from "@/types/cart";
import React from "react";

const CartReducer = (state: Cart, action: { type: any; payload: any }) => {
  console.log("prevState", state);
  console.log("action", action);
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      const cartItems = state.cartItems || [];

      const itemIndex = cartItems?.findIndex(
        (item: CartItem) => item.productId === action.payload.productId
      );

      if (itemIndex === -1) {
        const newItem = { ...action.payload };

        return {
          ...state,
          cartItems: [...cartItems, newItem],
        };
      } else {
        const updatedCartItems = cartItems.map((item, index) => {
          if (index === itemIndex) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }

    case CartActionTypes.DELETE_FROM_CART:
      console.log(action.payload, "ActionPayload delete function");
      const updatedCartItems = state.cartItems.filter(
        (i) => i.productId != action.payload.id
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    default:
      return state;
  }
};

export default CartReducer;
