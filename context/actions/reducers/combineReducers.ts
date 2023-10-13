import { InitialStateType } from "@/context/productContext";
import { Dispatch } from "react";

const useCombinedReducers = (combinedReducers:any,initialState:InitialStateType) => {
    // Global State
    const state: InitialStateType = Object.keys(combinedReducers).reduce(
      (acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }),
      initialState,
    );
  
    // Global Dispatch Function
    const dispatch:Dispatch<any> =( action:any) =>
      Object.keys(combinedReducers)
        .map(key => combinedReducers[key][1])
        .forEach(fn => fn(action));
  
    return {state, dispatch};
  };
  
  export default useCombinedReducers;