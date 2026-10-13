import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4 flex justify-between items-center ">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1 flex justify-between gap-4">
            <div className="header_top__ico_wrapper ml-5 @apply bg-gray-200 rounded-md-p-[12px] text-[22px] cursor-pointer hover:text-accent] hover:text-[#ff8f9c]">
              <FaFacebook />
            </div>
            <div className="header_top__ico_wrapper @apply bg-gray-200 rounded-md-p-[12px] text-[22px] cursor-pointer hover:bg-accent hover:text-[#ff8f9c]">
              <FaTwitter />
            </div>
            <div className="header_top__ico_wrapper @apply bg-gray-200 rounded-md-p-[12px] text-[22px] cursor-pointer hover:bg-accent hover:text-[#ff8f9c]">
              <FaInstagram />
            </div>
            <div className="header_top__ico_wrapper @apply bg-gray-200 rounded-md-p-[12px] text-[22px] cursor-pointer hover:bg-accent hover:text-[#ff8f9c]">
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="text-gray-500 text-[12px] ">
          <b>FREE SHIPPING</b>THIS WEEK ORDER OVER-$55
        </div>
        <div className="flex gap-4">
          <select
            className="text-gray-500 text-[12px] w-[70px]"
            name="currency"
            id="currency"
          >
            <option value="USD $"> USD $</option>
            <option value="EUR "> EUR</option>
            <option value="IND">IND</option>
          </select>
          <select
            className="text-gray-500 text-[12px] w-80px]"
            name="language"
            id="language"
          >
            <option value="English"> English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
