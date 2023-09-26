import { SlCalender } from "react-icons/sl";

const CartNews = ({ day, month, year, image, title }: any) => {
  return (
    <>
      <div className="flex gap-2">
        <div className="">
          <div className="bg-mainred text-white ">
            <div className="flex flex-col p-2 items-center">
              <SlCalender className="font-bold text-[22px]" />
              <h3 className="font-bold text-[22px]">{day}</h3>
              <span>
                {month}/{year}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[340px]">
          <div className=" h-[215px] overflow-hidden">
            <img
              src={image}
              alt="tin tuc"
              className="hover:scale-110 duration-300 w-full h-full"
            />
          </div>
          <h3 className="uppercase font-semibold cursor-pointer hover:text-mainred duration-300">
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CartNews;
