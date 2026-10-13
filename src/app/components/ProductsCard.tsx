import React from 'react';
import Image from 'next/image'; 
import { HiStar } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import { parse } from 'path';

interface PropsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductsCard: React.FC<PropsType> = ({ img, title, desc, rating, price }) => {

const generateRating =(rating: number) => {
    switch(rating) {
        case 1:
            return(
                <div className="flex gap-1 text-[20px] text-[#ff9529]">
                    <HiStar />
                    <HiOutlineStar />
                    <HiOutlineStar />
                    <HiOutlineStar />
                    <HiOutlineStar />
                </div>
            );
        case 2:
            return(
                <div className="flex gap-1 text-[20px] text-[#ff9529]">
                    <HiStar />
                    <HiStar />
                    <HiOutlineStar />
                    <HiOutlineStar />
                    <HiOutlineStar />
                </div>
            );
        case 3:
            return(
                <div className="flex gap-1 text-[20px] text-[#ff9529]">
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiOutlineStar />
                    <HiOutlineStar />
                </div>
            );
        case 4:
            return(
                <div className="flex gap-1 text-[20px] text-[#ff9529]">
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiOutlineStar />
                </div>
            );
        case 5:
            return(
                <div className="flex gap-1 text-[20px] text-[#ff9529]">
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                    <HiStar />
                </div>
            );
       
        default:
        return null;
    }
}

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image 
          className="w-full h-auto" 
          src={img}
          width={200}
          height={300}
          alt={title} 
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-[#ff8f9c] font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold flex gap-4 ">${price}
            <del className="text-gray-500 font-normal">${parseInt(price) +50}.00</del>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
