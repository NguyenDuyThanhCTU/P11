import React, { useEffect } from "react";
import CardProduct from "../../Item/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper";
import { useData } from "../../../../Context/DataProviders";
import CartNews from "../../Item/CartNews";
import { Link } from "react-router-dom";

const Section4 = () => {
  const { Posts } = useData();
  const [PostData, setPostData] = React.useState<any>([]);

  useEffect(() => {
    const sort = Posts.filter((item: any) => item.type !== "policy");
    setPostData(sort);
  }, [Posts]);

  return (
    <>
      <div className="my-16 d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
        <div className="h-10 flex  justify-center items-center gap-5">
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
          <h3 className="text-mainred p:text-[20px] d:text-[30px] uppercase leading-10 font-UTMAmerican font-bold">
            Tin tức & sự kiện
          </h3>

          <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
        </div>
        <h3 className="font-UTMFleur text-[30px] text-center">
          Sức khỏe vàng trong tầm tay bạn
        </h3>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={3}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Posts.filter((item: any) => item.type !== "policy").map(
            (items: any) => {
              const timestamp = items.createdAt.toDate();

              const year = timestamp.getFullYear();
              const month = timestamp.getMonth() + 1;
              const day = timestamp.getDate();
              return (
                <SwiperSlide>
                  {" "}
                  <Link to={`/bai-viet/${items.url}`}>
                    <CartNews
                      day={day}
                      month={month}
                      year={year}
                      image={items.image}
                      title={items.title}
                    />
                  </Link>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Section4;
