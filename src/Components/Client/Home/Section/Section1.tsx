import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { useData } from "../../../../Context/DataProviders";
import { Link } from "react-router-dom";

const Section1 = () => {
  const { Slides } = useData();

  return (
    <div className="my-16 d:w-[1300px] d:mx-auto p:w-auto ">
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {Slides.map((items: any, idx: number) => (
          <SwiperSlide>
            <div className="w-[1300px] h-[475px] overflow-hidden">
              <img
                className="p-2 h-full w-full object-contain hover:scale-105 duration-500"
                src={items.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2 py-5 px-5 d:flex-row p:flex-col">
        <div className=" flex-[45%]">
          <img
            src="https://yensaotrison.com/upload/hinhanh/z2503880890314-adb72f4c6dc9d7aeffb458c8aca29e4e-3604_522x416.jpg"
            alt="banner"
            className="w-full h-full"
          />
        </div>
        <div className=" flex-[55%] px-10">
          <h3 className="font-UTMFleur text-[40px]">Giới thiệu</h3>
          <h3 className="font-UTMAmerican font-bold text-mainred text-center text-[30px] leading-7">
            YẾN SÀO TRÍ SƠN - TRISONNEST
          </h3>
          <div className="indent-3 mt-5">
            <p>
              Yến Sào Trí Sơn được thành lập từ một sự tình cờ bắt gặp một cặp
              chim yến về làm tổ ở kho lúa vùng nông thôn đồng bằng sông Cửu
              Long, hai người bạn đang hợp tác kinh doanh cá giống bắt đầu cải
              tạo kho lúa đã lâu không sử dụng thành nhà yến.
            </p>
            <p className="mt-10">
              Từ đó chúng tôi nghiên cứu tập tính của Yến phát hiện ra môi
              trường sống của loài chim yến phụ thuộc vào nhiệt độ, độ ẩm và
              nguồn thức ăn. Và miền Tây chính là nơi có đầy đủ các điều kiện tự
              nhiên với sự đa dạng sinh thái từ cánh đồng lúa, vườn cây ăn trái,
              kênh mương đến các khu rừng tràm, rừng bảo tồn, … đan xen nhau,
              cung cấp một nguồn thức ăn (côn trùng bay) vô cùng phong phú và
              dồi dào. Ngoài ra, sự phát triển của loài chim yến còn đem lại
              hiệu quả cho nông nghiệp như giảm bớt côn trùng, sâu bọ hại mùa
              màng, tạo nên hệ sinh thái cộng hưởng bền vững trong nông nghiệp!
            </p>
          </div>
          <Link to={`/gioi-thieu`}>
            <div className="text-mainred mt-5 hover:text-red-700 cursor-pointer">
              Đọc thêm ___
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
