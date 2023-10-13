import axios from "axios";
import { ProductValuesType } from "@/app/upload/UploadContainer";
import { useProductContext } from "@/context/productContext";

export async function AddProduct(productData: ProductValuesType) {
  const { name, description, image, price } = productData;
  const body = {
    name,
    description,
    image,
    price: +price,
  };
  try {
    const { data, status } = await axios({
      url: `${process.env.NEXT_PUBLIC_APIURL}/products/upload`,
      method: "post",
      data: JSON.stringify(body),
    });
    console.log(JSON.stringify(data, null, 4));
    console.log(status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export async function GetAllProducts() {
  const requestOptions = {
    method: "GET",
    next: {
      revalidate: 200,
    },
  };
  return (
    fetch(`${process.env.NEXT_PUBLIC_APIURL}/products/allProducts`, requestOptions)
      .then((response) => response.json())
      // .then(result => console.log(result))
      .catch((error) => console.log("error", error))
  );
}

export async function fetchCart(userId: string) {
  let url = `${process.env.NEXT_PUBLIC_APIURL}/cart/get/${userId}`;
  const requestOptions: RequestInit = {
    method: "GET",
    cache: 'no-store',
  };

  return fetch(url, requestOptions)
    .then((res) => res.json()).then(res => res.data)
    .catch((err) => console.error(err));
}
