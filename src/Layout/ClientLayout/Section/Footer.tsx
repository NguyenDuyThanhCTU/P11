import React from "react";
import { useData } from "../../../Context/DataProviders";
import { Link } from "react-router-dom";
import { Posts } from "../../../Utils/temp";

const Footer: React.FC = () => {
  const { TradeMarkData, ContactData } = useData();

  return (
    <div className="bg-[url(https://yensaotrison.com/upload/hinhanh/bg-ft-3451_1366x390.jpg)]">
      <div className="w-[1300px] mx-auto py-10 grid p:grid-cols-1 d:grid-cols-3  text-white font-UTMAmerican p-2 gap-5">
        <div>
          <h3 className="text-mainyellow text-[30px] uppercase font-bold leading-10 ">
            {TradeMarkData.websiteName}
          </h3>
          <div className="text-[20px] mt-8 flex flex-col gap-2">
            <p>Điện thoại: {ContactData.phone}</p>
            <p>Email: {ContactData.email}</p>
            <p>Website: {ContactData.website}</p>
            <p>Giờ làm việc: {ContactData.worktime}</p>
            <p>Địa chỉ: {ContactData.address}</p>
          </div>
        </div>
        <div>
          <div className="text-[18px]">
            <h3 className="uppercase">Chính sách</h3>
            <div className="h-1 w-10 bg-white"></div>
          </div>
          <div className="flex flex-col gap-3 mt-8">
            {Posts.map((item: any) => {
              if (item.type === "policy") {
                return (
                  <Link to={`/bai-viet/${item.url}`}>
                    <div className="hover:text-mainyellow">
                      <p>- {item.title}</p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div className="h-52 overflow-hidden">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdichvuquangcaotrongoicantho%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="500"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
