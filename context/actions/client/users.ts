import axios from "axios";

import { signUpType } from "@/app/(auth)/signup/signup";

export async function SignUpUser(user: signUpType) {
  return axios({
    url: `${process.env.NEXT_PUBLIC_APIURL}/signin`,
    method: "post",
    data: JSON.stringify(user),
  });
}
