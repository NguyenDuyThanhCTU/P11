import React, { useState, useEffect } from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import { useData } from "../../../Context/DataProviders";

import { TypeProductItems } from "../../../Utils/item";
import Section4 from "./Section/Section4";
import SaleFE from "../Sale/Sale";
import moment from "moment";

const Home: React.FC = () => {
  const { Products, Sale } = useData();
  const currentTime = new Date();
  const formatCurrentTime = moment(currentTime).format("YYYY-MM-DD");

  return (
    <div className="mt-52">
      <Section1 />
      {Sale?.salelist?.length > 0 && formatCurrentTime <= Sale.end && (
        <SaleFE />
      )}

      <Section2 Data={Products} />

      {TypeProductItems.map((items: any, idx: number) => {
        const sort = Products.filter(
          (item: any) => item.parent === items.label
        );
        return (
          <>
            <Section3 Data={sort} Title={items.label} />
          </>
        );
      })}
      <Section4 />
    </div>
  );
};

export default Home;
