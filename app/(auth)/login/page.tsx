import Image from "next/image";
import React, { Suspense } from "react";

import LoginPage from "./loginPage";

const Page = () => {
    console.log(process.env,"Login page env client")
  return (
    <div className="flex max-w-9xl bg-gray-200 ">
      <div>
        <LoginPage />
      </div>
      <div className="px-12 my-12">
        <Suspense>
          <Image
            src="https://images.pexels.com/photos/6552139/pexels-photo-6552139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="loginImage"
            width={1260}
            height={720}
            className="rounded-lg h-[720px]"
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
