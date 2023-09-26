import { useState } from "react";
import { useData } from "../../../Context/DataProviders";
import { RxCross2 } from "react-icons/rx";
import { Modal } from "antd";

const Video: React.FC = () => {
  const { Videos } = useData();
  const [isVideo, setVideo] = useState<any>("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (url: string) => {
    setIsModalOpen(true);
    setVideo(url);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative   h-screen ">
      <h3 className="w-full flex justify-center items-center font-LexendDeca text-[50px] d:py-5 p:py-2 ">
        Video
      </h3>
      <div className="grid d:grid-cols-4 p:grid-cols-1 grid-rows-4 gap-5 w-[1250px] mx-auto">
        {Videos.map((items: any) => (
          <div className=" w-60 h-60 relative shadow-2xl hover:scale-105 duration-300">
            <iframe
              src={items.embedurl}
              className="w-full h-full rounded-t-xl  "
              title="YouTube Video"
              allowFullScreen
            ></iframe>
            <div
              className="bg-none  w-full h-full absolute top-0 cursor-pointer "
              onClick={() => showModal(items.embedurl)}
            ></div>
          </div>
        ))}
      </div>
      <Modal
        title="Video"
        open={isModalOpen}
        onCancel={handleCancel}
        width={"80rem"}
        bodyStyle={{ height: "40rem" }}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        <iframe
          src={isVideo}
          className="w-full h-full rounded-t-xl  "
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default Video;
