"use client";

import {
  ReactNode,
  createContext,
  useReducer,
  FC,
  Dispatch,
  useContext,
} from "react";
import React from "react";
import { ProductValuesType } from "@/app/upload/UploadContainer";
import { Cart } from "@/types/cart";
import useCombinedReducers from "./actions/reducers/combineReducers";
import ProductReducer from "./actions/reducers/productReducer";
import CartReducer from "./actions/reducers/cartReducer";

export type InitialStateType = {
  products: ProductValuesType[];
  cart: Cart;
};

const initialState: InitialStateType = {
  products: [],
  cart: {
    id: "",
    userId: "",
    status: false,
    cartItems: [],
  },
};

// const ProductReducer = (
//   state: InitialStateType,
//   action: { type: any; payload: any }
// ) => {
//   switch (action.type) {
//     case "ADD_PRODUCT":
//       return {
//         ...state,
//         products: [...state.products, action.payload],
//       };
//     default:
//       return state;
//   }
// };
// const ProductContext = createContext<{
//   state: InitialStateType;
//   dispatch: Dispatch<any>;
// }>({
//   state: initialState,
//   dispatch: () => null,
// });

export const StateContext = React.createContext<{
  state: InitialStateType;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });
// export const DispatchContext = React.createContext<Dispatch<any>>(() => null);

export const ProductProvider = ({
  children,
  data,
}: {
  children: ReactNode;
  data: InitialStateType;
}) => {
  // const [state, dispatch] = useReducer(ProductReducer, data);
  const { state, dispatch } = useCombinedReducers(
    {
      products: useReducer(ProductReducer, data.products),
      cart: useReducer(CartReducer, data.cart),
    },
    data
  );

  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(StateContext);
  //   const dispatch = useContext(DispatchContext);
};
