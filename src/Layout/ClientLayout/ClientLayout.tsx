import React, { useEffect, useState } from "react";

import { useData } from "../../Context/DataProviders";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "./Section/Header";
import Hotline from "./Section/Hotline";
import OnTop from "./Section/OnTop";
import Copyright from "./Section/Copyright";
import Footer from "./Section/Footer";
import { useLocation } from "react-router-dom";
import Loading from "../../Components/Item/Loading";
import { useStateProvider } from "../../Context/StateProvider";
import { Spin } from "antd";
import { getAllDocuments } from "../../Config/Services/Firebase/FireStoreDB";

const ClientLayout = ({ children }: any) => {
  const { TradeMarkData, Products } = useData();
  const { setIsLoading } = useStateProvider();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
  }, [location]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
        <link rel="manifest" href={TradeMarkData.websiteLogo} />
        <link rel="apple-touch-icon" href={TradeMarkData.websiteIco} />
      </Helmet>

      <div className="relative z-50">
        <Loading />
        {Products.length === 0 && (
          <>
            <div className="z-[100] fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
              <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-75 flex justify-center items-center">
                <div className="text-xl font-bold text-primary flex flex-col items-center">
                  <Spin />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="relative z-10">
        <Header />
      </div>
      <div className="d:mt-[65px] p:mt-0">{children}</div>
      {/* {location.pathname === "/" ||
      location.pathname === "/lien-he" ||
      location.pathname === "/video" ? (
        <>{children}</>
      ) : (
        <>
          <div className="d:w-[1250px] p:w-auto p:mx-2 d:mx-auto my-16 ">
            {children}
          </div>
        </>
      )} */}

      <Footer />
      <div className="relative z-40">
        <OnTop />
        <Hotline />
      </div>
      <Copyright />
    </HelmetProvider>
  );
};

export default ClientLayout;
