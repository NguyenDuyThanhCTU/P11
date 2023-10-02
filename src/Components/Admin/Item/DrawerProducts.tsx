import { useState } from "react";

import { Modal } from "antd";
import { FiEdit } from "react-icons/fi";
import { useData } from "../../../Context/DataProviders";
import { MdSwitchAccessShortcutAdd } from "react-icons/md";

const DrawerProducts = ({ HandleUpdate }: any) => {
  const { Products } = useData();
  const [open, setOpen] = useState(false);
  const [productUrl, setproductUrl] = useState<any>("");

  const HandleAddSaleList = (id: any) => {
    setproductUrl(id);
    setOpen(true);
  };

  const Handle = (id: any) => {
    HandleUpdate(id);
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-start gap-2 ">
        <div className="h-1 w-[70px] bg-[#40b2b5] d:block p:hidden"></div>
        <h3 className="text-[24px] font-normal uppercase text-center">
          Danh sách sản phẩm
        </h3>
      </div>
      <div className="border mt-2">
        <div className="flex flex-col">
          <div className="grid grid-cols-4 items-center my-2 ml-1 justify-start px-5 border-b">
            <p></p>
            <p>Hình ảnh</p>
            <p>Tên sản phẩm</p>
            <p>Lần cuối cập nhật</p>
          </div>
          <div>
            {Products.map((data: any, idx: number) => (
              <div
                key={idx}
                className="grid grid-cols-4 items-center my-2 ml-1 justify-start px-5"
              >
                <div className="group relative">
                  <FiEdit className="text-red-600 hover:scale-125 duration-300" />
                  <div className="w-max bg-white opacity-90 absolute -top-2 h-8 left-5 rounded-lg hidden group-hover:block">
                    <div className="mx-3 gap-2 flex justify-between text-[24px] h-full items-center">
                      <MdSwitchAccessShortcutAdd
                        className="text-red-600 hover:scale-125 duration-300"
                        onClick={() => HandleAddSaleList(data.url)}
                      />
                    </div>
                    <div className="absolute bg-none w-3 h-8 top-0 -left-2"></div>
                  </div>
                </div>
                <img
                  src={data.image}
                  alt="product"
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div className=" truncate text-[14px]">{data.title}</div>
                <div>
                  {data.daysSinceCreation > 0 ? (
                    <div>
                      <p className="text-[12px] w-[85px] truncate py-1 border px-2 rounded-3xl text-orange-300 border-orange-300">
                        {data.daysSinceCreation} ngày trước
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-[12px] w-[65px] truncate border px-2 py-1 rounded-3xl text-green-300 border-green-300">
                        Bây giờ
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <>
        <Modal
          title="Thông tin SALE"
          open={open}
          footer={null}
          onCancel={() => setOpen(false)}
        >
          <h2>Bạn muốn liên kết với sản phẩm này?</h2>
          <div className="flex w-full items-center gap-3 justify-center mt-3 cursor-pointer text-white font-LexendDeca font-bold">
            <div
              className="bg-blue-500 py-2 px-4 hover:bg-blue-600 duration-300"
              onClick={() => Handle(productUrl)}
            >
              Liên Kết
            </div>
            <div
              className="bg-red-500 py-2 px-4 hover:bg-red-600 duration-300"
              onClick={() => setOpen(false)}
            >
              Hủy
            </div>
          </div>
        </Modal>
      </>
    </>
  );
};

export default DrawerProducts;
