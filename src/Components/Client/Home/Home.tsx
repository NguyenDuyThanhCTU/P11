import React from "react";
import Section from "./Section/Section";
import Section1 from "./Section/Section1";
import { useData } from "../../../Context/DataProviders";

const Home = () => {
  return (
    <div>
      <Section />
      <Section1 />
    </div>
  );
};

export default Home;
