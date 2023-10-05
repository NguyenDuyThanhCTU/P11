import React, { useEffect } from "react";
import { useStateProvider } from "../../Context/StateProvider";
import { useData } from "../../Context/DataProviders";
import {
  GetProducts,
  getAllDocuments,
  getAllProducts,
} from "../../Config/Services/Firebase/FireStoreDB";

const Fetch: React.FC = () => {
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

    if (isRefetch === "CRUD products") {
      getAllProducts("products").then((data: any) => {
        setProducts(data?.reverse());
        setIsRefetch("");
      });
    } else {
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

      setTimeout(() => {
        getAllDocuments("products").then((data: any) => {
          setProducts(data?.reverse());
        });
      }, 500);

      // setTimeout(() => {
      //   const interval = setInterval(() => {
      //     GetProducts("products").then((data: any) => {
      //       setProducts(data?.reverse());
      //       if (data && data.length > 0) {
      //         console.log(data);
      //         clearInterval(interval); // Dừng interval nếu product khác 0
      //       }
      //     });
      //   }, 1000); // Lặp lại mỗi giây (có thể điều chỉnh thời gian lặp tùy ý)
      // }, 500);
    }

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

  const fetchProductsIfEmpty = (delay: number) => {
    setTimeout(() => {
      if (Products.length === 0) {
        getAllDocuments("products").then((data: any) => {
          setProducts(data?.reverse());
        });
      }
      console.log(delay, Products.length);
    }, delay);
  };

  fetchProductsIfEmpty(10000);
  fetchProductsIfEmpty(15000);

  return <></>;
};

export default Fetch;
