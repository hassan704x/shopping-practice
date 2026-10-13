import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6 pl-7 pr-5 ">
      <div className="contianer sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          Logo
        </div>
        <div className="w-full sm:w-[300px] md.w-[70%] relative">
          <input
            type="text"
            placeholder="Enter any Product name...."
            className="boder-gray-200 border p-2 px-4 rounded-lg w-full"
          />
          <IoIosSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gra-400"
            size={20}
          />
        </div>
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px] flex gap-2">
          <FaUser />
          <div className="relative">
            <FaRegHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <FaShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
