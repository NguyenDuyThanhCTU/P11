import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../Context/StateProvider";
import { useData } from "../../Context/DataProviders";
import {
  getAllDocuments,
  getAllProducts,
} from "../../Config/Services/Firebase/FireStoreDB";

const Fetch: React.FC = () => {
  const [fetchingData, setFetchingData] = useState(true);
  const {
    // Website
    setSocialMedia,
    setSlides,
    setContactData,
    setTradeMarkData,
    setAccounts,

    // Service
    setProductType,
    setProducts,
    setOrders,
    setBranches,
    setVideos,
    setPosts,
    setIntroduction,
    setIntroPhoto,
    setSale,
    setNotification,
    Products,
    // custom
  } = useData();

  const { isRefetch, setIsRefetch } = useStateProvider();

  useEffect(() => {
    setIsRefetch(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isRefetch !== "") {
      setIsRefetch("");
    }

    getAllDocuments("website").then((data: any) => {
      data?.forEach((items: any) => {
        if (items.id === "Contact") {
          setContactData(items);
        } else if (items.id === "Trademark") {
          setTradeMarkData(items);
        } else if (items.id === "SocialMedia") {
          setSocialMedia(items.Data);
        } else if (items.id === "Introduction") {
          setIntroduction(items);
        } else if (items.id === "Sale") {
          setSale(items);
        }
      });
    });

    getAllDocuments("accounts").then((data: any) => {
      setAccounts(data);
    });

    getAllDocuments("notification").then((data: any) => {
      setNotification(data);
    });

    getAllDocuments("slide").then((data: any) => {
      setSlides(data?.reverse());
    });

    getAllDocuments("achievementsImage").then((data: any) => {
      setIntroPhoto((prev: any) => ({
        ...prev,
        archivement: data?.reverse(),
      }));
    });
    getAllDocuments("titlesImage").then((data: any) => {
      setIntroPhoto((prev: any) => ({
        ...prev,
        titles: data?.reverse(),
      }));
    });

    getAllDocuments("posts").then((data: any) => {
      setPosts(data?.reverse());
    });

    getAllDocuments("productTypes").then((data: any) => {
      setProductType(data);
    });

    getAllDocuments("orders").then((data: any) => {
      setOrders(data?.reverse());
    });

    getAllDocuments("branches").then((data: any) => {
      setBranches(data?.reverse());
    });

    getAllDocuments("videos").then((data: any) => {
      setVideos(data?.reverse());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isRefetch,
    setIsRefetch,
    setAccounts,
    setBranches,
    setContactData,
    setOrders,
    setPosts,
    setProductType,

    setSlides,
    setSocialMedia,
    setTradeMarkData,
    setVideos,
  ]);

  useEffect(() => {
    setTimeout(() => {
      const fetchProductsInterval = setInterval(async () => {
        const data: any = await getAllProducts("products");
        setProducts(data.reverse());
        if (data.length > 0) {
          clearInterval(fetchProductsInterval); // Dừng interval nếu Products > 0
        }
      }, 1000); // Gọi hàm getAllProducts mỗi 1 giây

      // Hủy bỏ interval khi unmount component
      return () => {
        clearInterval(fetchProductsInterval);
      };
    }, 500);
  }, [isRefetch, setProducts]);

  return <></>;
};

export default Fetch;
