import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";
import { TypeProductItems } from "../../../Utils/item";
import ProductCard from "./Items/ProductsCard";
import Catelogy from "../../Item/Catelogy";

const Products = () => {
  const [DataFetch, setDataFetch] = useState([]);
  const { Products, productTypes } = useData();
  const { id } = useParams();

  useEffect(() => {
    const sort = TypeProductItems.filter((item) => item.value === id);
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

  return (
    <>
      <div className="p:w-auto d:w-[1300px] mx-auto flex gap-5 d:flex-row p:flex-col">
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
              {" "}
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
        <div className="flex">
          <Catelogy />
        </div>
      </div>
      ;
    </>
  );
};

export default Products;
