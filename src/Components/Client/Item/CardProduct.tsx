import { Badge, Card } from "antd";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";
import moment from "moment";

const CardProduct = ({ Data }: any) => {
  const { Sale } = useData();
  const currentTime = new Date();
  const formatCurrentTime = moment(currentTime).format("YYYY-MM-DD");
  console.log(formatCurrentTime <= Sale.end);
  return (
    <Link to={`/chi-tiet-san-pham/${Data.url}`}>
      {Data.sale.discount === 0 || formatCurrentTime <= Sale.end ? (
        <div className="border cursor-pointer ">
          <div className="">
            <div className="p-2">
              <div className="overflow-hidden  ">
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
              <p className="font-bold text-mainred">{Data.price} VNĐ</p>
              <div className=" px-2 py-1 flex items-center gap-3 bg-mainred text-white rounded-l-full">
                <BiPhoneCall />
                <p> Liên Hệ</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Badge.Ribbon text={`Giảm ${Data.sale.discount}%`} color="red">
          <div className="border cursor-pointer ">
            <div className="">
              <div className="p-2">
                <div className="overflow-hidden  ">
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
                <div>
                  <p className="font-bold text-gray-500 line-through text-[14px]">
                    {Data.price} VNĐ
                  </p>
                  <p className="font-bold text-mainred">
                    {Data.sale.newPrice} VNĐ
                  </p>
                </div>
                <div className=" px-2 py-1 flex items-center gap-3 bg-mainred text-white rounded-l-full">
                  <BiPhoneCall />
                  <p> Liên Hệ</p>
                </div>
              </div>
            </div>
          </div>
        </Badge.Ribbon>
      )}
    </Link>
  );
};

export default CardProduct;
