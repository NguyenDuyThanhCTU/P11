import { useData } from "../../../Context/DataProviders";

const Copyright = () => {
  const { ContactData } = useData();
  return (
    <>
      <div className="flex justify-center text-center px-2 text-[14px] font-Montserrat font-normal py-5 bg-black text-white">
        <p className="pr-2">©2023 All Rights reserved ADS Company</p>
        <p className="pl-2 border-l-[1px] border-gray-400">
          Designed by Thanh Dev ADS Company
        </p>
      </div>
      <div>
        <iframe
          src={ContactData.location}
          className="w-full h-[50vh]"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Copyright;
