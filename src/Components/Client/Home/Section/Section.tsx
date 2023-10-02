import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { useData } from "../../../../Context/DataProviders";

const Section = () => {
  const { Slides } = useData();

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Slides?.map((items: any, idx: number) => (
          <>
            {" "}
            <SwiperSlide>
              <div className="w-full h-[50vh] overflow-hidden">
                <img
                  src={items.image}
                  alt="slide"
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Section;
