import React, { useState } from "react";
import { useData } from "../../Context/DataProviders";
import { AiOutlineRight, AiOutlineUnorderedList } from "react-icons/ai";
import { TypeProductItems } from "../../Utils/item";
import { BsArrowReturnRight, BsNewspaper } from "react-icons/bs";
import { Link } from "react-router-dom";

const Catelogy = () => {
  const [selected, setIsSelected] = useState<number>(0);
  const { ContactData, TradeMarkData, productTypes, Products } = useData();
  const HandleSelect = (idx: number) => {
    if (selected === idx) {
      setIsSelected(0);
    } else {
      setIsSelected(idx);
    }
  };
  return (
    <div className="p:w-auto px-2 d:w-[250px] flex flex-col gap-5">
      <div className="p-2 border text-gray-600 flex flex-col gap-5">
        <h1>
          Đặt hàng - Tư vấn - Nhận báo giá tốt nhất tại{" "}
          <strong className="uppercase"> {TradeMarkData.websiteName}</strong>
        </h1>
        <div>
          <p>Tư vấn bán hàng:</p>
          <p className="text-[22px] text-red-500 font-semibold">
            {ContactData.phone}
          </p>
        </div>

        <p>
          Hotline khiếu nại: <strong>{ContactData.phone}</strong>
        </p>
        <p>
          Hotline cứu hộ: <strong>{ContactData.phone}</strong>
        </p>
        <p>
          <strong>Địa chỉ 1:</strong>
          {ContactData.address}{" "}
        </p>
      </div>
      <div>
        <div className="flex items-center gap-2 font-bold text-[20px] text-red-600 uppercase ">
          <AiOutlineUnorderedList />
          <p>Danh mục</p>
        </div>
        <div className="mt-2 flex flex-col gap-2 font-bold">
          {TypeProductItems.map((items: any, idx: any) => {
            const sort = productTypes.filter(
              (item: any) => item.parentUrl === items.value
            );
            return (
              <>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => HandleSelect(idx + 1)}
                >
                  <AiOutlineRight className="text-[12px]" />
                  <p className="uppercase">{items.label}</p>
                </div>
                {selected === idx + 1 && (
                  <>
                    {" "}
                    <div className="flex flex-col text-gray-500 text-[14px] cursor-pointer">
                      {sort.map((item: any, idx: number) => (
                        <Link to={`/san-pham/${item.typeUrl}`}>
                          <div className="flex items-center gap-2 hover:underline ">
                            <BsArrowReturnRight />
                            <p>{item.type}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 font-bold text-[20px] text-red-600 uppercase ">
          <BsNewspaper />
          <p>sản phẩm mới nhất</p>
        </div>
        <div className="mt-2 flex flex-col gap-2 font-bold cursor-pointer">
          {Products.slice(0, 4).map((items: any, idx: number) => (
            <Link to={`/chi-tiet-san-pham/${items.url}`}>
              <div className="flex gap-2">
                <div className="flex-1 w-full">
                  <img src={items.image} alt="products" />
                </div>
                <h2 className="flex-1 text-gray-500 hover:text-red-400 text-[14px]">
                  {items.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catelogy;
