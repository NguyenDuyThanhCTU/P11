import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";
import { useStateProvider } from "../../../Context/StateProvider";

import DropDown from "../Item/DropDown";

import { HeaderItems, TypeProductItems } from "../../../Utils/item";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Header: React.FC = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(0);
  const [elementTop, setElementTop] = useState(95);
  const [Hidden, setHidden] = useState(false);
  const [IsTranslate, setTranslate] = useState(false);
  const [Keyword, setKeyword] = useState("");

  const { TradeMarkData, productTypes } = useData();
  const { setSearch } = useStateProvider();

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
      setTranslate(true);
    } else {
      setElementTop(95);
      setTranslate(false);
    }
  }, [scrollPosition]);

  const HandleOpenSubMenu = (idx: number) => {
    if (idx === isOpenSubMenu) {
      setIsOpenSubMenu(0);
    } else {
      setIsOpenSubMenu(idx);
    }
  };

  function HandleSearch() {
    setSearch(Keyword);
  }

  return (
    <div className="d:h-[126px] font-LexendDeca  p:h-auto">
      <div className="bg-white ">
        <div className=" bg-none h-full relative  bg-white ">
          {/* <---------------------------------------------------------- Desktop ----------------------------------------------------------> */}
          {/* Main header */}
          <div className=" w-full    text-[#1b365d] h-[92px] z-50 p:hidden d:flex justify-center">
            <div className="flex justify-between first-letter: items-center w-[1100px] ">
              <div className="flex items-center gap-10">
                <Link to="/">
                  <img
                    src={TradeMarkData.websiteLogo}
                    alt="img"
                    className="w-[110px]"
                  />
                </Link>
                <div className=" text-[#2d94c4]">
                  <div className="flex items-center flex-col">
                    <h3 className="uppercase text-[24px] font-bold">
                      {TradeMarkData.websiteName}
                    </h3>
                    <span className="text-redPrimmary">
                      Uy tín - Chất lượng - Giá rẻ
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-20 items-center">
                <div className="relative text-black group  cursor-pointer">
                  <input
                    type="text"
                    onChange={(e) => setKeyword(e.target.value)}
                    className="p-2 px-4 outline-none rounded-full bg-white border-mainpink border w-[300px]"
                  />
                  <Link to={`/san-pham/${Keyword}`}>
                    <FiSearch
                      onClick={() => {
                        HandleSearch();
                      }}
                      className={`${
                        Keyword && "-right-10 bg-[#F67D08] text-white"
                      } group-hover:bg-[#F67D08] group-hover:text-white inline-block bg-white w-[36px] h-[36px] p-2 font-bold rounded-full text-[#F67D08] absolute right-[4px] bottom-[3px] group-hover:-right-10  duration-300 hover:scale-110`}
                    />
                  </Link>
                  <div
                    className={`${
                      Keyword ? "-top-3 left-5  " : "top-2 left-4"
                    } bg-white absolute   group-hover:-top-3 group-hover:left-5 px-2 duration-300`}
                  >
                    Tìm kiếm
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sub Header */}
          <div className="d:flex flex-col p:hidden w-full  items-center">
            <div
              className={`fixed z-10 ${
                IsTranslate
                  ? `w-full bg-white text-black `
                  : " w-[1600px] bg-gradient-to-b from-[#c5161d] via-[#de393e]  to-[#d0191e] text-white  "
              }   duration-300 h-[69px] rounded-lg flex justify-center px-5  items-center text-normal font-semibold gap-16`}
              style={{ top: `${elementTop}px` }}
            >
              {HeaderItems.map((items, idx) => {
                return (
                  <div className="relative" key={idx}>
                    <Link to={`/${items.link}`}>
                      <div className="group/main">
                        <div
                          className={`uppercase text-[18px] flex items-center justify-between  gap-2  hover:text-mainpink duration-500  ${
                            IsTranslate
                              ? ` ${
                                  isSelected === idx
                                    ? "text-mainpink"
                                    : "text-black"
                                }`
                              : `text-white`
                          }
  
                         `}
                          onClick={() => {
                            setIsSelected(idx);
                          }}
                        >
                          <p> {items.name}</p>
                          {items.name === "Sản phẩm" && (
                            <AiFillCaretRight className="group-hover/main:rotate-90 duration-500" />
                          )}
                        </div>
                        {items.name === "Sản phẩm" && (
                          <div className="group-hover/main:block hidden absolute left-0 mt-5 w-max bg-mainred  border   shadow-lg  rounded-b-sm  z-50">
                            <div className="absolute h-6 w-full bg-none -top-6"></div>
                            <div className="">
                              {TypeProductItems.map(
                                (items: any, idx: number) => {
                                  const sort = productTypes.filter(
                                    (item: any) =>
                                      item.parentUrl === items.value
                                  );

                                  return (
                                    <div className=" group/lv1    relative font-light text-white    border-b">
                                      <Link
                                        to={`${`/san-pham/${items.value}`}`}
                                      >
                                        <div className="hover:bg-[#bf0000] py-4 px-6 duration-300 flex justify-between items-center  w-full gap-3">
                                          <p>{items.label}</p>
                                          {sort.length > 0 && (
                                            <AiFillCaretRight
                                              className={` rotate-90 group-hover/lv1:rotate-0 duration-500 text-white`}
                                            />
                                          )}
                                        </div>
                                      </Link>

                                      {sort.length > 0 && (
                                        <>
                                          <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                            <div className="">
                                              {sort.map((items: any) => (
                                                <>
                                                  <div className=" group/lv2    relative font-light text-white    border-b">
                                                    <Link
                                                      to={`${`/san-pham/${items.typeUrl}`}`}
                                                    >
                                                      <div className="hover:bg-[#bf0000] py-4 px-6 duration-300 flex justify-between items-center  w-full gap-3">
                                                        <p>{items.type}</p>
                                                        {sort.length > 0 && (
                                                          <AiFillCaretRight
                                                            className={` rotate-90 group-hover/lv1:rotate-0 duration-500 text-white`}
                                                          />
                                                        )}
                                                      </div>
                                                    </Link>
                                                    {items.children.length >
                                                      0 && (
                                                      <>
                                                        <div className="hidden group-hover/lv2:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                                          <div className="">
                                                            {items.children.map(
                                                              (items: any) => (
                                                                <>
                                                                  <div className=" group/lv2    relative font-light text-white    border-b">
                                                                    <Link
                                                                      to={`${`/san-pham/${items.childrenUrl}`}`}
                                                                    >
                                                                      <div className="hover:bg-[#bf0000] py-4 px-6 duration-300 flex justify-between items-center  w-full gap-3">
                                                                        <p>
                                                                          {
                                                                            items.children
                                                                          }
                                                                        </p>
                                                                      </div>
                                                                    </Link>
                                                                  </div>
                                                                </>
                                                              )
                                                            )}
                                                          </div>
                                                        </div>
                                                      </>
                                                    )}
                                                  </div>
                                                </>
                                              ))}
                                            </div>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div
                      className={` ${
                        isSelected === idx
                          ? IsTranslate
                            ? "w-full bg-mainpink"
                            : "w-full bg-white"
                          : "w-0"
                      }  duration-500 h-2 rounded-3xl absolute -bottom-[23px]`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <---------------------------------------------------------- Mobile ----------------------------------------------------------> */}
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
                  (item: any) => item.parent === items.link
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
      </div>
    </div>
  );
};

export default Header;
