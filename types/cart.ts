import { ProductValuesType } from "@/app/upload/UploadContainer";

export type Cart = {
  id: string;
  userId: string;
  status: boolean;
  cartItems: CartItem[];
};

export type CartItem = {
  id?: string;
  productId: string;
  quantity: number;
  product: ProductValuesType
};
