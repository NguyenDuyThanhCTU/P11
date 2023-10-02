import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";
import { TypeProductItems } from "../../../Utils/item";
import ProductCard from "./Items/ProductsCard";
import Catelogy from "../../Item/Catelogy";
import { Pagination } from "antd";

const Products = () => {
  const [DataFetch, setDataFetch] = useState([]);
  const [current, setCurrent] = useState(1);
  const { Products, productTypes } = useData();
  const [type, setType] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const sort = TypeProductItems.filter((item) => item.value === id);
    //nếu sort có dữ liệu thì sẽ lọc ra các sản phẩm có parentUrl === id
    if (sort.length > 0) {
      const data = Products.filter((item: any) => item.parentUrl === id);

      if (data) {
        setDataFetch(data);
      }
    } else {
      const data = Products.filter((item: any) => item.typeUrl === id);
      if (data) {
        setDataFetch(data);
      }
    }
  }, [id, Products, productTypes]);

  useEffect(() => {
    const sortType = productTypes.filter((item: any) => item.typeUrl === id);
    const sortParent = productTypes.filter(
      (item: any) => item.parentUrl === id
    );

    if (sortType.length > 0) {
      setType(sortType[0].type);
    } else if (sortParent.length > 0) {
      setType(sortParent[0].parent);
    }
  }, [id, productTypes, Products]);

  const onChange = (page: any) => {
    setCurrent(page);
  };

  return (
    <>
      <div className="p:w-auto d:w-[1300px] mx-auto flex gap-5 d:flex-row p:flex-col p:py-5">
        <div className="flex flex-col">
          <div className="h-10 flex  justify-center items-center gap-5 ">
            <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
            <h3 className="text-mainred text-[30px] uppercase leading-10 font-UTMAmerican font-bold">
              Sản phẩm {type}
            </h3>
            <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
          </div>
          <div className="grid p:grid-cols-2 d:grid-cols-3 gap-2 mt-5  h-max p:w-auto d:w-[1030px]">
            {DataFetch.length === 0 ? (
              <div className="flex justify-center w-[1030px]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Fgsdfgsdfgsd.jpg?alt=media&token=b98b569d-9504-4c50-be02-f592535c3d53"
                  alt="not found"
                />
              </div>
            ) : (
              <>
                {DataFetch.map((items: any, idx: number) => (
                  <>
                    <div key={idx}>
                      <ProductCard Data={items} />
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
          <div className="mt-5 d:flex justify-center p:hidden w-full">
            <Pagination current={current} onChange={onChange} total={50} />
          </div>
        </div>
        <div className="flex">
          <Catelogy />
        </div>
      </div>
      ;
    </>
  );
};

export default Products;
