import React, { useState } from "react";
import { useData } from "../../../../Context/DataProviders";
import Input from "./Items/Input";
import { notification } from "antd";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const { ContactData } = useData();

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
    <div className="p:w-auto d:w-[1300px] mx-auto">
      <div>
        <iframe
          src={ContactData.location}
          className="w-full h-[50vh]"
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex mt-5 gap-5 d:flex-row p:flex-col p-2">
        <div className="flex-1">
          <div>
            <h3 className="text-[52px] font-light leading-[72px]">
              <strong className="font-bold">Liên hệ</strong> với chúng tôi
            </h3>

            <div className=" py-3 flex flex-col gap-3">
              <p className="font-[22px] p:w-auto d:w-[500px]">
                Hãy để lại thông tin đầy đủ theo mẫu bên dưới, Chúng tôi sẽ liên
                hệ hỗ trợ bạn trong thời gian sớm nhất.
              </p>
              <p className="text-redPrimmary font-thin">
                * là các thông tin bắt buộc
              </p>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <Input placeholder="Họ Tên(*)" setData={setName} input="input" />
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

        <div className="flex flex-col gap-2 flex-1">
          <p>
            <strong>Địa chỉ: </strong>Showwrom 1: Số 100, đường Võ Nguyên Giáp,
            Kp Tân Cang, Phường Phước Tân, Tp.Biên Hòa, Tỉnh Đồng Nai ( Ngay ngã
            tư Tân Cang).Showroom 2: Số 1 đường Song Hành QL22, Trung Mỹ Tây,
            Quận 12, Thành Phố Hồ Chí Minh{" "}
          </p>
          <p>
            <strong>Tel:</strong> {ContactData.phone}{" "}
          </p>
          <p>
            <strong>Hotline:</strong> {ContactData.phone}{" "}
          </p>
          <p>
            <strong>Email:</strong> {ContactData.gmail}
          </p>
          <p>
            <strong>Website:</strong> {ContactData.website}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
