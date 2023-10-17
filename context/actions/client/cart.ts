import { CartItem } from "@/types/cart";
import axios from "axios";

export async function AddToCart(cartId: string, cartItem: CartItem) {
  let url = `${process.env.NEXT_PUBLIC_Backend}/cart/update`;
  let method = "post";
  let data = JSON.stringify({ cartId, cartItem });
  return axios(url, {
    method,
    data,
  });
}

export function DeleteCartItem(cartId: string, cartItem: CartItem) {
  let url = `${process.env.NEXT_PUBLIC_Backend}/cart/delete`;
  let modUrl = new URL(url);
  modUrl.searchParams.set("cartId", cartId);
  modUrl.searchParams.set("cartItemId", cartItem?.id || "");
  console.log("modURL", modUrl);
  let method = "delete";
  return axios(modUrl.toString(), {
    method,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
}
