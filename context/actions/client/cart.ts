import CartActionTypes from "@/context/actionTypes/cartActionTypes";
import { CartItem } from "@/types/cart";
import axios from "axios";
import { Dispatch } from "react";

export async function AddToCart(
  cartId: string,
  cartItem: CartItem,
  dispatch: Dispatch<any>
) {
  dispatch({
    type: CartActionTypes.ADD_TO_CART,
    payload: cartItem,
  });
//   let url = `${process.env.NEXT_PUBLIC_APIURL}/cart/update`;
//   let method = "post";
//   let data = { cartId, cartItem };
//   await axios(url, {
//     method,
//     data,
//   })
//     .then((res) => res.data)
//     .then((res) => {
//       console.log(res, "Received from Api");
//       dispatch({
//         type: CartActionTypes.ADD_TO_CART,
//         payload: cartItem,
//       });
//     })
//     .catch((err) => console.error(err));
}


