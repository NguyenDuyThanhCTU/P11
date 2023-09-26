import React, { useState, useEffect } from "react";
import { useData } from "../../../Context/DataProviders";

import { Link, useParams } from "react-router-dom";
import { Pagination } from "antd";
import CartNews from "../Item/CartNews";

const News: React.FC = () => {
  const { Posts } = useData();
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const { id } = useParams();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    if (id === "tin-tuc-su-kien") {
      setCurrentItems(
        Posts.filter((items: any) => items.type === "news").slice(
          indexOfFirstItem,
          indexOfLastItem
        )
      );
    }
    if (id === "hop-tac") {
      setCurrentItems(
        Posts.filter((items: any) => items.type === "cooperate").slice(
          indexOfFirstItem,
          indexOfLastItem
        )
      );
    }
    if (id === "quy-trinh-san-xuat") {
      setCurrentItems(
        Posts.filter((items: any) => items.type === "process").slice(
          indexOfFirstItem,
          indexOfLastItem
        )
      );
    }
  }, [currentPage, Posts, id]);

  const handlePageChange = (pageNumber: any, pageSize: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="my-16 d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
        <div className="h-10 flex  justify-center items-center gap-5">
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
          <h3 className="text-mainred text-[30px] uppercase leading-10 font-UTMAmerican font-bold">
            {id === "tin-tuc-su-kien"
              ? "Tin tức"
              : id === "hop-tac"
              ? "Hợp tác"
              : id === "quy-trinh-san-xuat" && "Quy trình sản xuất"}
          </h3>
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
        </div>
        <div className="grid d:grid-cols-3 gap-2 py-5 p:grid-cols-1">
          {currentItems.map((items: any) => {
            const timestamp = items.createdAt.toDate();

            const year = timestamp.getFullYear();
            const month = timestamp.getMonth() + 1;
            const day = timestamp.getDate();
            return (
              <Link to={`/bai-viet/${items.url}`}>
                <CartNews
                  day={day}
                  month={month}
                  year={year}
                  image={items.image}
                  title={items.title}
                />
              </Link>
            );
          })}
        </div>
        {Posts.length > 16 && (
          <Pagination
            defaultCurrent={6}
            total={Posts.length}
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default News;
