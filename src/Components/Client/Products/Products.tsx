import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";
import CardProduct from "../Item/CardProduct";

const Products: React.FC = () => {
  const [productFetch, setProductFetch] = useState([]);
  const [navigateUrl, setNavigateUrl] = useState("");
  const { Products } = useData();
  const { id } = useParams();

  //if id is not null, filter field : childrenUrl, parentUrl and typeUrl in product by id

  useEffect(() => {
    if (id) {
      const sortParent = Products?.filter(
        (items: any) => items.parentUrl === id
      );

      const sortChildren = Products?.filter(
        (items: any) => items.childrenUrl === id
      );
      const sortType = Products?.filter((items: any) => items.typeUrl === id);

      if (sortParent.length > 0) {
        setProductFetch(sortParent);
        setNavigateUrl("parent");
      } else if (sortChildren.length > 0) {
        setProductFetch(sortChildren);
        setNavigateUrl("children");
      } else if (sortType.length > 0) {
        setProductFetch(sortType);
        setNavigateUrl("type");
      }
    } else {
      setProductFetch(Products);
    }
  }, [id, Products]);

  return (
    <>
      <div className="my-16 d:w-[1300px] d:mx-auto p:w-auto p:mx-2">
        <div className="h-10 flex  justify-center items-center gap-5">
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
          <h3 className="text-mainred text-[30px] uppercase leading-10 font-UTMAmerican font-bold">
            {productFetch.length > 0 && (
              <>{id ? productFetch[0][navigateUrl] : "Sản phẩm"}</>
            )}
          </h3>
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
        </div>
        <div className="grid p:grid-cols-2 d:grid-cols-5 gap-2 mt-5 ">
          {productFetch.map((items: any, idx: number) => (
            <>
              <div key={idx}>
                <CardProduct Data={items} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
