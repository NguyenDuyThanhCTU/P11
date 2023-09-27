import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";
import { TypePostItems } from "../../../Utils/item";

import Catelogy from "../../Item/Catelogy";
import NewsCard from "./Items/NewsCard";

const News = () => {
  const [DataFetch, setDataFetch] = useState([]);
  const [Type, setType] = useState("Tin Tức");
  const { Posts, productTypes } = useData();
  const { id } = useParams();

  useEffect(() => {
    const sort = TypePostItems.filter((item) => item.value === id);

    if (sort.length > 0) {
      setType(sort[0].label);
      const data = Posts.filter((item: any) => item.type === id);
      if (data) {
        setDataFetch(data);
      }
    } else {
      setType("Tin Tức");
      const data = Posts.filter((item: any) => item.parent === "tin-tuc");
      if (data) {
        setDataFetch(data);
      }
    }
  }, [id, Posts, productTypes]);

  return (
    <>
      <div className="p:w-auto d:w-[1300px] mx-auto flex gap-5 font-LexendDeca d:flex-row p:flex-col">
        <div className="flex flex-col gap-5 mt-5  h-max p:w-auto px-2 d:w-[1030px]">
          <h1 className="text-[24px] font-bold text-blue-700 uppercase">
            {Type}
          </h1>
          {DataFetch.length === 0 ? (
            <div className="flex justify-center w-[1030px]">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fgsdfgsdfgsd.jpg?alt=media&token=b98b569d-9504-4c50-be02-f592535c3d53"
                alt="not found"
              />
            </div>
          ) : (
            <>
              {" "}
              {DataFetch.map((items: any, idx: number) => (
                <>
                  <div key={idx}>
                    <NewsCard Data={items} />
                  </div>
                </>
              ))}
            </>
          )}
        </div>
        <div className="flex">
          <Catelogy />
        </div>
      </div>
      ;
    </>
  );
};

export default News;
