import React, { useEffect, useState } from "react";

import { useData } from "../../../Context/DataProviders";
import { IconMapping, SocialMediaCustom } from "../../../Utils/item";

import { notification } from "antd";
import Input from "../Item/Input";

const Contact: React.FC = () => {
  const { ContactData, SocialMedia } = useData();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const HandleDiscard = () => {
    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    if (!phone || !name || !description) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
    } else {
      const dataFields = [
        { title: "Họ Tên:", value: name },
        { title: "Email:", value: email },
        { title: "SĐT:", value: phone },
        { title: "Phản hồi:", value: description },
      ];

      let data: any;

      dataFields.forEach((field) => {
        data[field.title] = field.value;
      });

      const response = await fetch(
        "https://formsubmit.co/ajax/thanhnd2512@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        HandleDiscard();
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
      } else {
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div>
        <iframe
          src={ContactData.location}
          className="w-screen h-[50vh]"
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex flex-col items-center gap-5 py-5 mx-2 w-full">
        <h3 className="uppercase text-maincontent text-[40px] font-semibold text-center">
          Kết nối với chúng tôi
        </h3>
        <div className="flex w-[70%] justify-between d:gap-32 d:flex-row p:flex-col p:gap-2">
          <div className="flex flex-col items-center">
            <p className="text-center text-[20px] font-normal text-maincontent">
              Hotline
            </p>
            <div
              className="cursor-pointer"
              onClick={() => {
                window.open(`tel:${ContactData.phone}`, "_self");
              }}
            >
              {" "}
              {ContactData.phone}
            </div>
          </div>
          <div>
            <p className="text-center text-[20px] font-normal text-maincontent">
              Email
            </p>
            <div
              className="cursor-pointer"
              onClick={() => {
                window.open(`mailto:${ContactData.gmail}`, "_self");
              }}
            >
              {ContactData.gmail}{" "}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3>Các kênh truyền thông</h3>
            <div className="flex mt-2 gap-2">
              {SocialMediaCustom.map((items, idx) => {
                let Icon = IconMapping[items.icon];
                let Point = SocialMedia[items.id];

                return (
                  <div
                    key={idx}
                    className={`${items.style} p-2 border rounded-full hover:scale-110 duration-300 border-black hover:border-white`}
                  >
                    {Icon && (
                      <a href={`https://${Point}`} target="_blank">
                        <Icon />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full font-OpenSans bg-[#e8edef] p:flex-col d:flex-row ">
        <div className="py-10  flex justify-center gap-5  ">
          <div className="w-[35%] overflow-hidden ">
            <img
              src="https://qhomedecor.vn/wp-content/uploads/2020/10/img-lienhe.png"
              alt="img"
              className="w-full hover:scale-125 duration-500 cursor-pointer"
            />
          </div>
          <div className="w-[30%]">
            <div>
              <h3 className="text-[52px] font-light leading-[72px]">
                <strong className="font-bold">Liên hệ</strong> với chúng tôi
              </h3>

              <div className=" py-3 flex flex-col gap-3">
                <p className="font-[22px] p:w-auto d:w-[500px]">
                  Hãy để lại thông tin đầy đủ theo mẫu bên dưới, Chúng tôi sẽ
                  liên hệ hỗ trợ bạn trong thời gian sớm nhất.
                </p>
                <p className="text-redPrimmary font-thin">
                  * là các thông tin bắt buộc
                </p>
              </div>
              <div className="flex flex-col gap-3 mb-5">
                <Input
                  placeholder="Họ Tên(*)"
                  setData={setName}
                  input="input"
                />
                <Input placeholder="Email" setData={setEmail} input="input" />
                <Input
                  placeholder="Điện thoại(*)"
                  setData={setPhone}
                  input="input"
                />
                <Input
                  placeholder="Hãy cho tôi biết câu hỏi hoặc phản hồi của bạn(*)"
                  input="textarea"
                  setData={setDescription}
                />
              </div>
              <div className="cursor-pointer " onClick={(e) => HandleSubmit(e)}>
                <span className="uppercase py-2 px-6 bg-red-400 hover:bg-redPrimmary text-white">
                  gửi đi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
