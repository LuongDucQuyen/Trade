import React from "react";
import HomeHeader from "./homePageChildren/homeHeader";
import HomeRight from "./homePageChildren/homeRight";
import HomeCenter from "./homePageChildren/homeCenter";
import "../../css/homePage.css";
const HomePage = () => {
  return (
    <div className="homeMain">
      <HomeHeader></HomeHeader>
      <div className="homeBody">
        <HomeCenter></HomeCenter>
        <HomeRight></HomeRight>
      </div>
    </div>
  );
};
export default HomePage;
