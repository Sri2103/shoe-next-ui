import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { CartItem } from "@/types/cart";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useProductContext } from "@/context/productContext";
import CartActionTypes from "@/context/actionTypes/cartActionTypes";

const CartItemCard = ({ cartItem }: { cartItem: CartItem }) => {
  const { dispatch } = useProductContext();
  const { product, quantity } = cartItem;
  const deleteCartItem = () => {
    dispatch({
      type: CartActionTypes.DELETE_FROM_CART,
      payload: { id: cartItem.productId },
    });
    console.log("cartItem delete clicked");
  };
  return (
    <div className="w-[38rem] bg-white">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">
              <Image
                src={product.image}
                width={200}
                height={160}
                alt={product.id}
                className="w-[180px] h-[160px] rounded-[0.35rem]"
              />
            </div>
          </div>
          <div>{`${quantity}`}</div>

          <div>{`$${product.price}`}</div>

          <div>
            <Trash2 onClick={deleteCartItem} className="cursor-pointer" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartItemCard;
