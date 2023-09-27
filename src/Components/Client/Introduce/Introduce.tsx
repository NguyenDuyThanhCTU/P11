import React from "react";
import Catelogy from "../../Item/Catelogy";
import { useData } from "../../../Context/DataProviders";

const Introduce = () => {
  const { Introduction } = useData();

  return (
    <div className="p:w-auto d:w-[1300px] mx-auto flex gap-5 d:flex-row p:flex-col">
      <div
        className="flex mt-5 h-max p:w-auto d:w-[1030px] flex-col gap-3 px-2"
        dangerouslySetInnerHTML={{ __html: Introduction.content }}
      ></div>
      <div>
        <Catelogy />
      </div>
    </div>
  );
};

export default Introduce;
