import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";
import { Image, Skeleton, Tabs } from "antd";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { FiPhoneCall } from "react-icons/fi";
import { useStateProvider } from "../../../Context/StateProvider";
import { BiMinus, BiPlus } from "react-icons/bi";

import { FacebookProvider, Comments } from "react-facebook";
import moment from "moment";
import Contact from "./Items/Contact";
import Catelogy from "../../Item/Catelogy";

const ProductDetail = () => {
  const [similarProduct, setSimilarProduct] = useState([]);
  const [ProductFetch, setProductFetch] = useState<any>();
  const [isCombo, setIsCombo] = useState(1);
  const [openContact, setOpenContact] = useState<any>(false);
  const { Sale } = useData();
  const navigate = useNavigate();
  const { Products } = useData();
  const { id } = useParams();

  useEffect(() => {
    const sort = Products.filter((item: any) => item.url === id);
    if (sort) {
      setProductFetch(sort[0]);
    }
  }, [id, Products]);

  useEffect(() => {
    const similarproduct = Products.filter(
      (item: any) => item.type === ProductFetch?.type
    );
    setSimilarProduct(similarproduct);
  }, [Products, ProductFetch]);

  const onMinus = () => {
    if (isCombo > 0) {
      setIsCombo(isCombo - 1);
    }
  };

  const items = [
    {
      key: "1",
      label: "Chi tiết sản phẩm",
      children: (
        <>
          <h3 className="text-[24px] font-semibold ">Chi tiết sản phẩm</h3>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: ProductFetch?.content }}
          ></div>
        </>
      ),
    },
    {
      key: "2",
      label: "Bình luận",
      children: (
        <>
          <div className="  ">
            <FacebookProvider appId="781034490143336">
              {" "}
              <Comments
                href="https://khogachcaocaptinphat.com"
                width={778}
              />{" "}
            </FacebookProvider>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-5 my-16 d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
      <div>
        <div className="flex d:mx-16 gap-16 font-LexendDeca d:flex-row p:flex-col p:mx-2 py-14">
          <div className="flex-[40%] rounded-lg d:h-max p:h-auto overflow-hidden">
            <Image.PreviewGroup>
              <Image
                className="p-2 h-full w-full object-contain hover:scale-110 duration-500"
                src={ProductFetch?.image}
              />
            </Image.PreviewGroup>
            {ProductFetch?.subimage?.length > 0 && (
              <>
                {" "}
                <div className="w-full bg-gray-100 mt-3">
                  <div className="p-2 flex ">
                    <Image.PreviewGroup>
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        {ProductFetch?.subimage?.map(
                          (item: any, idx: number) => (
                            <SwiperSlide>
                              {" "}
                              {/* <div className="mx-4 w-[150px] h-[150px] overflow-hidden flex items-center"> */}
                              <Image
                                className="p-2 h-full w-full object-contain"
                                src={item}
                              />
                              {/* </div> */}
                            </SwiperSlide>
                          )
                        )}
                      </Swiper>
                    </Image.PreviewGroup>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex-[70%] flex flex-col gap-5">
            <div>
              <h3 className="text-[26px] uppercase">{ProductFetch?.title}</h3>
              <div className="bg-black w-24 h-1"></div>
            </div>

            <div className="w-[200px] ">
              {ProductFetch?.state ? (
                <div className=" text-green-500 rounded-xl font-bold">
                  Tình trạng: Còn hàng
                </div>
              ) : (
                <div className=" text-red-500  rounded-xl font-bold">
                  Tình trạng: Hết hàng
                </div>
              )}
            </div>

            <div className="flex gap-5">
              <h2>Đặt hàng:</h2>
              <div
                className="py-3 px-6 bg-mainred text-white hover:bg-red-700 rounded-sm cursor-pointer duration-300"
                onClick={() => {
                  setOpenContact(true);
                }}
              >
                Liên hệ
              </div>
            </div>
            <div className="py-4 border-t border-b w-full font-light">
              <h3>Mô tả</h3>
              <div
                dangerouslySetInnerHTML={{ __html: ProductFetch?.describe }}
              ></div>
            </div>
            <div className="flex gap-3 items-center font-light">
              <span className="">Lượt xem {ProductFetch?.access}</span>
            </div>
          </div>
        </div>

        <div className="w-full gap-3 py-2 flex d:flex-row p:flex-col">
          <div className="d:px-16 py-5 p:px-2 border flex-[100%]">
            <Tabs
              defaultActiveKey="1"
              items={items}
              className="bg-white px-10 rounded-md font-LexendDeca py-5"
            />
          </div>

          <div className="flex-[30%] flex flex-col gap-5 items-center">
            <div>
              <h3 className="text-mainred py-2 border-b-2 border-mainred uppercase font-bold">
                Sản phẩm liên quan
              </h3>
              <div>
                {similarProduct?.map((item: any, idx: number) => (
                  <Link to={`/chi-tiet-san-pham/${item.url}`}>
                    <div className="flex gap-3 py-3 border-b" key={idx}>
                      <div className="flex-[30%]">
                        <img src={item.image} alt="similarProduct" />
                      </div>
                      <div className="flex-[60%]">
                        <h3 className="truncate1">{item.title}</h3>
                        <h3 className="text-mainred text-[18px] font-bold">
                          {item.price}
                        </h3>
                        <div className="flex">
                          <div className="py-1 px-4 bg-mainred text-white flex gap-2 items-center text-[15px]">
                            <FiPhoneCall />
                            <span>Liên hệ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <Catelogy />
            </div>
          </div>
        </div>
      </div>
      <>
        {openContact && (
          <Contact setOpenContact={setOpenContact} OpenContact={openContact} />
        )}
      </>
    </div>
  );
};

export default ProductDetail;
