import React from "react";
import { TypeProductItems } from "../../../Utils/item";
import { useData } from "../../../Context/DataProviders";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const HeaderFormDropDown: React.FC = () => {
  const { productTypes } = useData();
  return (
    <div className="w-[1400px] h-max bg-white text-black font-Main shadow-xl shadow-gray-200 z-50">
      <div className="grid grid-cols-4 ">
        {TypeProductItems.map((item: any, idx) => {
          const types = productTypes?.filter(
            (data: any) => data.parentUrl === item.value
          );
          return (
            <div
              key={idx}
              className="flex flex-col justify-start items-center border-r py-5 "
            >
              <Link to={`/${item.value}`}>
                <div className="">
                  <h1 className="text-center pb-2 text-mainblue font-bold ">
                    {item.label}
                  </h1>
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={item.image}
                      alt="type-product"
                      className="hover:scale-110 duration-300"
                    />
                  </div>
                </div>
              </Link>

              <div className="flex w-full px-6 py-6">
                <div className="">
                  {types?.map((data: any, idx: number) => (
                    <Link to={`/${item.value}/${data.typeUrl}`}>
                      <div className="flex items-center gap-3 border-b py-1 font-light cursor-pointer hover:text-mainblue">
                        <div className="text-[20px]">
                          <BiSolidCaretRightCircle />
                        </div>
                        <p>{data.type}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderFormDropDown;
