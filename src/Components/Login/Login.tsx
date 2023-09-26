import React, { useState } from "react";

import { LeftSide } from "./Section/LeftSide";
import { RightSide } from "./Section/RightSide";
import { ChangePassword } from "./Section/ChangePassword";

import Loading from "../Item/Loading";
import { ParticlesCustom } from "./Section/Item/ParticlesCustom";

const Login: React.FC = () => {
  const [isChangePasswords, setIsChangePasswords] = useState(false);

  return (
    <>
      <ParticlesCustom />
      <div className="bg-[rgba(0,0,0,0.3)] w-full h-full z-50 absolute">
        <Loading />

        <div className="d:w-[880px] p:w-[90vw] h-[529px] absolute  bg-white bottom-[25%] p:left-[5%] d:left-[30%] flex font-LexendDeca cursor-pointer rounded-sm -z-10">
          {isChangePasswords ? (
            <ChangePassword setIsChangePasswords={setIsChangePasswords} />
          ) : (
            <LeftSide setIsChangePasswords={setIsChangePasswords} />
          )}

          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Login;
