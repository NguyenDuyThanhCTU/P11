import moment from "moment";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const NewsCard = ({ Data }: any) => {
  const DetailPostDate = moment
    .unix(Data?.createdAt.seconds)
    .format("MMMM DD, YYYY");

  return (
    <Link to={`/chi-tiet-tin-tuc/${Data.url}`}>
      <div className="w-full flex gap-4 pb-5 border-b   ">
        <div className="max-w-[30%]">
          <img src={Data.image} alt="" />
        </div>
        <div>
          <h2 className="font-semibold text-[18px] hover:text-blue-600">
            {Data.title}
          </h2>
          <p className="text-gray-500 ">{DetailPostDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
