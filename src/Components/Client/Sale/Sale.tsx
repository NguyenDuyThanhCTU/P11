import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import CardProduct from "../Item/CardProduct";
import { useData } from "../../../Context/DataProviders";
import { convertListIdToProduct } from "../../Item/Handle";
import TimeSale from "../../Item/TimeSale";

const SaleFE: React.FC = () => {
  const { Sale, Products } = useData();

  const ProductFiltered = convertListIdToProduct(Sale.salelist, Products);

  return (
    <>
      <div className="w-full flex justify-end ">
        <div className="pr-5">
          <TimeSale />
        </div>
      </div>
      <div className="bg-[url(https://yensaotrison.com/upload/hinhanh/12-4707_1366x497.png)] bg-no-repeat bg-cover ">
        <div className="py-16 d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
          <div className="h-10 flex  justify-center items-center gap-5">
            <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
            <h3 className="text-mainred d:text-[20px] p:text-[30px] uppercase leading-10 font-UTMAmerican font-bold">
              Sản phẩm đang SALE
            </h3>
            <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
          </div>
          <div className="mt-5 d:flex p:hidden ">
            <Swiper
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              slidesPerView={5}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper "
            >
              <div className="mt-5 ">
                {ProductFiltered.map((items: any, idx: number) => (
                  <SwiperSlide>
                    <div key={idx}>
                      <CardProduct Data={items} />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
          <div className="mt-5 d:hidden p:block">
            <Swiper
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              slidesPerView={2}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper "
            >
              <div className="mt-5 ">
                {ProductFiltered.map((items: any, idx: number) => (
                  <SwiperSlide>
                    <div key={idx}>
                      <CardProduct Data={items} />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleFE;
