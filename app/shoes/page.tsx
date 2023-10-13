import Image from "next/image";
import React from "react";

const Page = () => {
    
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex">
        <div className="mr-12">
          <Image
            src={
              "https://images.pexels.com/photos/812871/pexels-photo-812871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            width={640}
            height={720}
            alt="Image_one"
          />
        </div>
        <div className="w-[80%] mr-4">
          <div className="flex items-center">
            <div className="ml-auto space-y-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
