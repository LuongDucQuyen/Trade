import React from "react";
import "../../../css/homeCenter.css";
import HomeCoreItem from "./homeCoreItem";
const HomeCenter = () => {
  return (
    <div className="homeCenter">
      <div className="homeCenterPanner">
        <div className="homeCenterPannerText">
          <h4>Lorem Ipsum is simply</h4>
          <h3>
            Lorem Ipsum is <br></br> simply
          </h3>
          <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </h4>
          <button className="homeCenterPannerButton">Find out more</button>
          <div className="homeCenterPannerSliderButton">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
        <div className="homeCenterPannerCircle">
          <div className="homeCenterPannerCircleOrange"></div>
          <div className="homeCenterPannerCircleBlue"></div>
          <div className="homeCenterPannerCirclePink"></div>
          <button className="homeCenterPannerCircleClose">
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
      <div className="homeCenterContent">
        <div className="homeCenterContentMenu">
          <div className="homeCenterContentMenuLeft">
            <ul>
              <li id="Core">
                <p>Core assets</p>
              </li>
              <li id="Gainers">
                <p>Top gainers</p>
              </li>
              <li id="Losers">
                <p>Top losers</p>
              </li>
              <li id="New">
                <p>new</p>
              </li>
            </ul>
          </div>
          <div className="homeCenterContentMenuRight">
            <div>
              <h4>Market cap</h4>
              <div className="homeOptionsSelectDownIcon">
                <div className="homeOptionsDownIconLeft"></div>
                <div className="homeOptionsDownIconRight"></div>
              </div>
            </div>
          </div>
        </div>
        <HomeCoreItem></HomeCoreItem>
      </div>
    </div>
  );
};
export default HomeCenter;
