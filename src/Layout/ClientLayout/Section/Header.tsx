import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";
import { useStateProvider } from "../../../Context/StateProvider";

import DropDown from "../Item/DropDown";

import {
  HeaderItems,
  IconMapping,
  SocialMediaCustom,
  TypePostItems,
  TypeProductItems,
} from "../../../Utils/item";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import {
  AiFillCaretRight,
  AiOutlineDown,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import HeaderFormDropDown from "../Item/HeaderFormDropDown";

const Header: React.FC = () => {
  const [Keyword, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [Hidden, setHidden] = useState(false);

  const { TradeMarkData, SocialMedia, productTypes, ContactData, Posts } =
    useData();
  const { setSearch } = useStateProvider();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementTop, setElementTop] = useState(80);
  const targetPosition = 1;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > targetPosition) {
      setElementTop(0);
    } else {
      setElementTop(80);
    }
  }, [scrollPosition]);

  function HandleSearch() {
    setSearch(Keyword);
  }

  return (
    <div className=" font-Main  p:h-auto shadow-lg shadow-gray-300 z-50 relative">
      <div className="d:flex flex-col p:hidden ">
        <div className="shadow-sm shadow-gray-200 h-[80px] ">
          <div className="w-[1300px] mx-auto flex justify-between items-center h-full">
            <div className="h-[80px] w-auto">
              <img
                src={TradeMarkData.websiteLogo}
                alt=""
                className="w-full h-full"
              />
            </div>

            <div className="flex gap-10">
              <div className="flex gap-2 justify-center items-center text-[12px] pl-5 border-l">
                <img
                  src="https://otoanphuoc.com/imgs/layout/icon_1.png"
                  alt="hotline"
                />
                <div className="">
                  <h2 className="uppercase text-gray-500 font-semibold ">
                    Hotline 24/7
                  </h2>
                  <p className="text-red-600">{ContactData.phone}</p>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center text-[12px] pl-5 border-l">
                <img
                  src="https://otoanphuoc.com/imgs/layout/icon_2.png"
                  alt="hotline"
                />
                <div className="">
                  <h2 className="uppercase text-gray-500 font-semibold ">
                    Email hỗ trợ
                  </h2>
                  <p className="text-red-600">{ContactData.gmail}</p>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center text-[12px] pl-5 border-l">
                <img
                  src="https://otoanphuoc.com/imgs/layout/icon_3.png"
                  alt="hotline"
                />
                <div className="">
                  <h2 className="uppercase text-gray-500 font-semibold ">
                    Giờ làm việc
                  </h2>
                  <p>{ContactData.worktime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-gradient-to-r from-red-900 to-red-700  w-full d:h-[50px] flex justify-center fixed  duration-300 shadow-lg shadow-gray-300 "
          style={{ top: `${elementTop}px` }}
        >
          <div className="w-[1300px] flex justify-between items-center text-white">
            <div>
              <div
                className={`${
                  isOpen ? "hidden" : "flex"
                }  gap-5 uppercase font-normal items-center h-[85px]`}
              >
                {HeaderItems.map((items, idx) => {
                  const sort = productTypes.filter(
                    (item: any) => item.parentUrl === items.link
                  );
                  const sortPost = TypePostItems.filter(
                    (data: any) => data.value === items.link
                  );
                  const sortValue = TypePostItems.filter(
                    (data: any) => data.parentUrl === items.link
                  );
                  return (
                    <div className="relative" key={idx}>
                      <Link
                        to={`${
                          sort.length > 0
                            ? `/san-pham/${items.link}`
                            : sortPost.length > 0
                            ? `/tin-tuc/${items.link}`
                            : `/${items.link}`
                        }`}
                      >
                        <div className="group/main">
                          <div
                            className={`uppercase text-[18px] flex items-center justify-between  gap-2  hover:text-mainpink duration-500  `}
                          >
                            <div className="pr-2 border-r-[1px] flex gap-1 items-center text-[14px]">
                              <p> {items.name}</p>
                              {sort.length > 0 && (
                                <AiFillCaretRight className="group-hover/main:rotate-90 duration-500 text-[14px]" />
                              )}
                              {sortValue.length > 0 && (
                                <AiFillCaretRight className="group-hover/main:rotate-90 duration-500 text-[14px]" />
                              )}
                            </div>
                          </div>
                          {sort.length > 0 && (
                            <div className="group-hover/main:block hidden absolute left-0 mt-5 w-max bg-red-700  border   shadow-lg  rounded-b-sm  z-50">
                              <div className="absolute h-6 w-full bg-none -top-6"></div>
                              <div className="">
                                {productTypes
                                  .filter(
                                    (data: any) => data.parentUrl === items.link
                                  )
                                  .map((item: any, idx: number) => {
                                    return (
                                      <div className=" group/lv1    relative font-light text-white    border-b">
                                        <Link
                                          to={`${`/san-pham/${item.typeUrl}`}`}
                                        >
                                          <div className="hover:bg-red-800 py-4 px-6 duration-300 flex justify-between items-center  w-full gap-3 ">
                                            <p>{item.type}</p>
                                          </div>
                                        </Link>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          )}
                          {sortValue.length > 0 && (
                            <div className="group-hover/main:block hidden absolute left-0 mt-5 w-max bg-red-700  border   shadow-lg  rounded-b-sm  z-50">
                              <div className="absolute h-6 w-full bg-none -top-6"></div>
                              <div className="">
                                {TypePostItems.map((item: any, idx: number) => {
                                  return (
                                    <div className=" group/lv1    relative font-light text-white    border-b">
                                      <Link to={`${`/tin-tuc/${item.value}`}`}>
                                        <div className="hover:bg-red-800 py-4 px-6 duration-300 flex justify-between items-center  w-full gap-3">
                                          <p>{item.label}</p>
                                        </div>
                                      </Link>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </Link>
                    </div>
                  );
                })}
                {/* {HeaderItems.map((item, idx) => {
                  const sort = productTypes.filter(
                    (items: any, idx: any) => items.parentUrl === item.link
                  );

                  return (
                    <div
                      className="hover:text-mainred group duration-300 flex flex-col justify-between h-full relative "
                      key={idx}
                    >
                      <div className="w-full h-1 bg-none group-hover:bg-mainred duration-300"></div>
                      <Link to={`/${item.link}`}>
                        <div className="">
                          <div className="pl-5 border-l-[1px] flex justify-between items-center gap-2 ">
                            <p>{item.name}</p>
                            {sort.length > 0 && (
                              <AiOutlineDown className="text-[10px]" />
                            )}
                          </div>
                        </div>
                      </Link>
                      <div></div>
                      {sort.length > 0 && (
                        <div className="absolute h-0 bg-none group-hover:h-[800px] overflow-hidden  m-auto -left-[700px] top-[50px] duration-300 z-50">
                          <div className="bg-none h-10 w-full"></div>
                          <HeaderFormDropDown />
                        </div>
                      )}
                    </div>
                  );
                })} */}
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  <AiOutlineSearch />
                </div>
              </div>

              <div
                className={`${
                  isOpen ? "w-[700px] " : "w-0"
                } duration-300  items-center flex justify-between gap-3`}
              >
                <div
                  className={`${
                    isOpen ? "flex" : "hidden"
                  } bg-white text-black  w-full justify-between`}
                >
                  <input
                    type="text"
                    className="outline-none p-2 w-full border"
                    placeholder="Search..."
                  />
                  <div className="px-3 flex items-center text-white bg-black hover:bg-mainred duration-300 text-[22px]  cursor-pointer">
                    <AiOutlineSearch />
                  </div>
                </div>
                <div
                  className={`text-[24px] ${
                    isOpen ? "block" : "hidden"
                  } cursor-pointer`}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <RxCross2 />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-0">
            <img
              src="https://otoanphuoc.com/imgs/layout/nav_mn_before.png"
              alt="header"
            />
          </div>
        </div>
      </div>

      <div className="p:block d:hidden w-full  ">
        <div className="flex justify-between  items-center ">
          <Link to="/">
            <img
              src={TradeMarkData.websiteLogo}
              alt="logo"
              className="h-[50px] m-5 "
            />
          </Link>
          <div className="flex items-center text-[60px]">
            {Hidden ? (
              <RxCross1
                className="bg-redPrimmary text-white p-2 "
                onClick={() => setHidden(!Hidden)}
              />
            ) : (
              <MdOutlineFormatListBulleted
                className="bg-redPrimmary text-white p-2 "
                onClick={() => setHidden(!Hidden)}
              />
            )}
          </div>
        </div>
        <div
          className={`${
            Hidden ? "h-screen" : "h-0 "
          } w-full duration-700 bg-[rgba(253,253,253,0.9)] overflow-y-scroll`}
        >
          {HeaderItems.map((items: any, idx: any) => {
            const sort = productTypes.filter(
              (item: any) => item.parentUrl === items.link
            );

            return (
              <div key={idx}>
                <DropDown
                  idx={idx}
                  dropdown={sort}
                  content={items.name}
                  link={items.link}
                  setHidden={setHidden}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
