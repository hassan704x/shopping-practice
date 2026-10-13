"use client";

import React from "react";
import Image from "next/image"; 
import { ImGift } from "react-icons/im";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  pauseOnHover: false,
};

const slideData = [
  {
    id: 0,
    img: "/banner-1.jpg",
    title: "TRENDING ITEM",
    mainTitle: "WOMEN'S LATEST FASHION SALE",
    price: "$20",
  },
  {
    id: 1,
    img: "/banner-2.jpg",
    title: "TRENDING ACCESSORIES",
    mainTitle: "MODERN SUNGLASSES",
    price: "$25",
  },
  {
    id: 2,
    img: "/banner-3.jpg",
    title: "SALE OFFER",
    mainTitle: "NEW FASHION SUMMER SALE",
    price: "$30",
  },
];

const Hero = () => {
  return (
    <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
        {slideData.map((item) => (
          <div key={item.id} className="text-center">
            <Image
              className="w-full h-[50px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
              src={item.img}
              alt={item.mainTitle}
              width={2000}
              height={2000}
            />
            <h3 className="text-lg font-bold mt-4">{item.title}</h3>
            <h2 className="text-2xl font-extrabold">{item.mainTitle}</h2>
            <p className="text-primary mt-2 font-bold">{item.price}</p>
            <div className="bg-[#ff8f9c] text-white text-[14px] md:text-[16px] p-2 rounded-lg inline-block cursor-pointer hover:bg-blackish mt-2">
              Shop Now
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
