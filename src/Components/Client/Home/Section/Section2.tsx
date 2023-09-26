import React from "react";
import CardProduct from "../../Item/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

const Section2 = ({ Data }: any) => {
  return (
    <div className="bg-[url(https://yensaotrison.com/upload/hinhanh/12-4707_1366x497.png)] bg-no-repeat bg-cover">
      <div className="my-16 d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
        <div className="h-10 flex  justify-center items-center gap-5">
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
          <h3 className="text-mainred d:text-[20px] p:text-[30px] uppercase leading-10 font-UTMAmerican font-bold">
            sản phẩm nổi bật
          </h3>
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
        </div>
        <div className="mt-5 d:block p:hidden">
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
              {Data.map((items: any, idx: number) => (
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
              {Data.map((items: any, idx: number) => (
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
  );
};

export default Section2;
