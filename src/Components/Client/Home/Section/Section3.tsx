import React from "react";
import CardProduct from "../../Item/CardProduct";

const Section3 = ({ Data, Title }: any) => {
  return (
    <div className="">
      <div className="my-16 d:w-[1300px] d:mx-auto p:w-auto p:mx-2 ">
        <div className="h-10 flex  justify-center items-center gap-5">
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit.png)] h-4 w-[83px] bg-cover bg-no-repeat"></div>
          <h3 className="text-mainred p:text-[20px] d:text-[30px] uppercase leading-10 font-UTMAmerican font-bold">
            {Title}
          </h3>
          <div className="bg-[url(https://yensaotrison.com/images/bg_tit1.png)] h-4 w-[86px] bg-cover bg-no-repeat"></div>
        </div>
        <div className="grid d:grid-cols-5 gap-2 mt-5 p:grid-cols-2">
          {Data.map((items: any, idx: number) => (
            <>
              <div key={idx}>
                <CardProduct Data={items} />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
