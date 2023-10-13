"use client";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

export const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
      >
        <ChevronLeft />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
      >
        <ChevronRight />
      </div>
    );
  };

  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };



  return (
    <div className="relative w-full mx-auto">
      <Slider {...settings}>
        <div className="w-full">
          <Image
            src="https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={1260}
            height={750}
            alt="banner-1"
            className="w-full h-[750px]"
          />
        </div>
        <div className="w-full ">
          <Image
            src="https://images.pexels.com/photos/15007209/pexels-photo-15007209/free-photo-of-photo-of-a-posing-woman-with-long-hair-standing-on-a-winter-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={1260}
            height={750}
            alt="banner-2"
            className="w-full h-[750px]"
          />
        </div>
        <div  className="w-full ">
          <Image
            src="https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={1260}
            height={750}
            alt="banner-3"
            className="w-full h-[750px]"
          />
        </div>
      </Slider>
     
      <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  );
};
