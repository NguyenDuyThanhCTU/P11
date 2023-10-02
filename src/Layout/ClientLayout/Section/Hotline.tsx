import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { useData } from "../../../Context/DataProviders";
import { Link } from "react-router-dom";

function Hotline() {
  const { SocialMedia, ContactData } = useData();
  console.log(ContactData);

  return (
    <div className="fixed bottom-7 right-10  box-border flex flex-col gap-5">
      <div className="p:flex items-center d:hidden">
        <a
          href={`https://${SocialMedia[1]}`}
          className="h-14 w-14 p-2 bg-blue-500 border-white border flex items-center rounded-full justify-center"
        >
          <FaFacebookF className="text-white text-[40px]" />
        </a>
      </div>
      <div className="p:flex items-center d:hidden">
        <a
          href={`https://${SocialMedia[0]}`}
          className="h-14 w-14 bg-white border border-blue-500 text-blue-500 flex items-center rounded-full justify-center"
        >
          <SiZalo className=" w-full h-full p-3" />
        </a>
      </div>

      <div
        className="flex items-center"
        onClick={() => window.open(`tel:${ContactData.phone}`)}
      >
        <div className="text-black font-semibold d:flex p:hidden justify-start items-center rounded-full w-[250px]  h-[60px] bg-white shadow-2xl absolute right-5">
          <span className="ml-5">Liên hệ với chúng tôi</span>
        </div>
        <div className="h-14 w-14   call-animation">
          <BiPhoneCall className="text-white text-[40px]" />
        </div>
      </div>
    </div>
  );
}

export default Hotline;
