import axios from "axios";
import { ProductValuesType } from "../UploadContainer";
export async function uploadProduct(productData:ProductValuesType) {
    const {name,description,image,price} = productData
    const body = {
        name ,
        description,
        image,
        price: +price
    }
  try {
    const { data, status } = await axios({
        url: `${process.env.NEXT_PUBLIC_Backend}/upload`,
        method:"post",
        data: JSON.stringify(body),
    }
    );
    console.log(JSON.stringify(data, null, 4));
    console.log(status);
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

export async function testRoute() {
  try {
    const { data, status } = await axios.get(
      `${process.env.NEXT_PUBLIC_Backend}/1dc7aa77-24ca-4120-b59e-9a7eb5e9d947`,

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      }
    );
    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log("response status is: ", status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export async function testPostRequest() {
  try {
    const { data, status } = await axios({
        url:`${process.env.NEXT_PUBLIC_Backend}/testPostRoute`,
        method:"post",
    });
    console.log(status);
    console.log(JSON.stringify(data, null, 4));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
