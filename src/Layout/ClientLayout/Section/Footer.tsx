import React from "react";
import { useData } from "../../../Context/DataProviders";
import { Link } from "react-router-dom";
import { Posts } from "../../../Utils/temp";

const Footer: React.FC = () => {
  const { TradeMarkData, ContactData } = useData();
  console.log();
  return (
    <>
      <div>
        <div className="p:w-auto border-t d:w-[1200px] mx-auto text-center py-5 font-LexendDeca text-[15px] font-light flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold ">
            {TradeMarkData.websiteName}
          </h1>
          <h2>{TradeMarkData.websiteSlogan}</h2>
          <p>
            <strong>Địa chỉ 1: </strong> {ContactData.address}
          </p>

          <p>
            <strong> Hotline:</strong> {ContactData.phone}
          </p>
          <p>
            <strong> Gmail:</strong> {ContactData.gmail}
          </p>
          <p>
            <strong> Thời gian hoạt động:</strong> {ContactData.worktime}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
