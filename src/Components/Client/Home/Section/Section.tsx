import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { useData } from "../../../../Context/DataProviders";

const Section = () => {
  const { Slides } = useData();
  console.log(Slides);
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
              <div>
                <img src={items.image} alt="slide" />
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Section;
