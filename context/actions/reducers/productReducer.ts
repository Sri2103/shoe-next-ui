import { ProductValuesType } from "@/app/upload/UploadContainer";
import productActionType from "@/context/actionTypes/productActionTypes";

const ProductReducer = (
    state: ProductValuesType[],
    action: { type: any; payload: any }
  ) => {
    switch (action.type) {
      case productActionType.ADD_PRODUCT:
        return {
          ...state,
          products: [...state, action.payload],
        };
      default:
        return state;
    }
  };
  export default ProductReducer