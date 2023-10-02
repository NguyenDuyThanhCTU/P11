import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductCard = ({ Data }: any) => {
  return (
    <Link to={`/chi-tiet-san-pham/${Data.url}`}>
      <div className="border cursor-pointer h-[320px] ">
        <div className="">
          <div className="p-2">
            <div className="overflow-hidden h-[200px]  ">
              <img
                src={Data.image}
                alt="product"
                className="w-full h-full hover:scale-110 duration-300"
              />
            </div>
            <h3 className="text-center mt-2 truncate1 d:text-[16px] p:text-[14px]">
              {Data.title}
            </h3>
          </div>

          <div className="flex w-full justify-between pl-2 py-4 d:text-[16px] p:text-[12px]">
            <p className="font-bold text-mainred"></p>
            <div className=" px-2 py-1 flex items-center gap-3 bg-mainred text-white rounded-l-full">
              <BiPhoneCall />
              <p> Liên Hệ</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
