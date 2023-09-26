import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useData } from "../../Context/DataProviders";
import { useStateProvider } from "../../Context/StateProvider";
import { getDocumentById } from "../../Config/Services/Firebase/FireStoreDB";

const PostDetail: React.FC = () => {
  const [isData, setIsData] = useState<any>();
  const { Posts } = useData();
  const { id } = useParams();

  useEffect(() => {
    const sort = Posts?.filter((items: any) => items.url === id);
    if (sort.length > 0) {
      setIsData(sort[0]);
    }
  }, [Posts, id]);

  const DetailPostDate = moment
    .unix(isData?.createdAt.seconds)
    .format("MMMM DD, YYYY");

  return (
    <>
      <div className=" flex  font-Montserrat my-16 d:w-[1300px] d:mx-auto p:w-auto p:mx-2 d:flex-row p:flex-col">
        <div className="  w-full   ">
          <div className=" mx-auto w-[90%]">
            <div className=" pb-5 border-b flex flex-col gap-4">
              <h3 className="text-[#333333] text-[34px] font-normal">
                {isData?.title}
              </h3>
              <div className="flex gap-5">
                <div className="uppercase p-1 text-blue-500 border border-blue-500">
                  {isData?.type}
                </div>
                <div className="flex items-center gap-1 text-gray-400 pr-5 border-r">
                  <AiOutlineClockCircle />
                  <p className="">{DetailPostDate}</p>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <AiOutlineUser />
                  <p className=""> noithatdaiphat</p>
                </div>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: isData?.content }}
              className="font-light font-LexendDeca mt-5"
            ></div>
          </div>
        </div>

        <div className="flex-[30%] w-full ">
          <div className="flex flex-col gap-10">
            <div className=" border-b-4  border-red-400 text-[24px]  font-bold w-[80%]">
              {" "}
              Bài viết liên quan
            </div>
            <div className="flex flex-col gap-4">
              {Posts?.filter((items: any) => items.type === isData?.type).map(
                (items: any, idx: any) => {
                  const formattedDate = moment
                    .unix(items.createdAt.seconds)
                    .format("MMMM DD, YYYY");

                  return (
                    <Link to={`/bai-viet/${items.url}`}>
                      <div key={idx}>
                        <div
                          className={`flex items-center  cursor-pointer border-b pb-4`}
                        >
                          {items.type !== "policy" && (
                            <div className="flex-[30%] h-[60px]">
                              <img
                                src={items.image}
                                alt="postsimage"
                                className="h-full w-full object-cover"
                              />
                            </div>
                          )}

                          <div className="ml-3 flex flex-col gap-2 flex-[70%]">
                            <p className="truncate1 text-[16px] font-bold">
                              {items.title}
                            </p>
                            <div className="flex items-center gap-1 text-black">
                              <AiOutlineClockCircle />
                              <p className="">{formattedDate}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
