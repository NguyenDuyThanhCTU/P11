import React from "react";
import { useData } from "../../../../Context/DataProviders";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";

const Section1 = () => {
  const { Products } = useData();

  return (
    <div>
      <div className="w-[1300px] mx-auto p:hidden d:flex flex-col items-center gap-5 my-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={4}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="flex justify-center ">
            {Products?.map((items: any, idx: number) => (
              <>
                <SwiperSlide>
                  <Link to={`/chi-tiet-san-pham/${items.url}`}>
                    <div className="bg-gray-200 h-[250px] flex flex-col cursor-pointer">
                      <div>
                        <img src={items.image} alt="slide" />
                      </div>
                      <div className="text-center mt-2">
                        <h2 className="font-semibold text-blue-700 uppercase">
                          {items.title}{" "}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </>
            ))}
          </div>
        </Swiper>
      </div>

      <div className="p:w-auto d:w-[1300px] mx-auto flex flex-col items-center gap-5 my-10">
        <div className="flex flex-col items-center">
          <h2 className="uppercase text-[18px] font-bold">Sản phẩm nổi bật</h2>
          <div className="h-1 w-20 bg-blue-700"></div>
        </div>
        <div className="w-full">
          <div className="grid d:grid-cols-4 p:grid-cols-2 gap-5">
            {Products?.sort((a: any, b: any) => b.access - a.access)
              .slice(0, 4)
              ?.map((items: any, idx: number) => (
                <Link to={`/chi-tiet-san-pham/${items.url}`}>
                  <div className="border-b  border-blue-500 pb-5  h-[290px] ">
                    <div>
                      <img src={items.image} alt="slide" />
                    </div>
                    <div className="text-center">
                      <h2 className="font-semibold text-blue-700 uppercase">
                        {items.title}{" "}
                      </h2>
                      <p>
                        {" "}
                        Lượt xem:{" "}
                        <span className="text-red-500">{items.access}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
