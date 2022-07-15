import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/homeCoreItem.css";
import { DataContext } from "../../../dataContext";
import { TabContext } from "../../../TabContext";
import CoreItemGraph from "./CoreItemGraph";
const HomeCoreItem = () => {
  const limit = 6;
  const [productTab, setProductTab] = useState(1);
  const ApiState = useContext(DataContext);
  const TabState = useContext(TabContext);
  const data = ApiState.slice(0, productTab * limit);
  var today = new Date();
  var times =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const handleSeeMore = () => {
    setProductTab(productTab + 1);
  };
  return (
    <div className="CoreMain">
      {data.map((item) => (
        <div className="itemGroup" key={item.id}>
          <div className="ItemGroupTop">
            <div className="ItemGroupTopLeft">
              <div className="ItemGroupTopLogo">
                <img src={item.image} alt=""></img>
              </div>
              <div className="ItemGroupTopLogoName">
                <h5>{item.name}</h5>
                <p>{item.symbol}</p>
              </div>
            </div>
            <div className="ItemGroupTopRight">
              <p>24h</p>
            </div>
          </div>
          <div className="ItemGroupContent">
            <div className="ItemGroupPrice">
              <div className="ProductPrice">
                <p>
                  {Math.round(item.price_change_24h * 10 ** 4) / 10 ** 4} USD
                </p>
              </div>
              <div className="ProductPercentage">
                <div className="homeRightPercentChange ">
                  <div
                    className={item.price_change_24h > 0 ? "up" : "down"}
                  ></div>
                  <p
                    className={
                      item.price_change_24h > 0
                        ? "ProductPercentageChange"
                        : "red ProductPercentageChange"
                    }
                  >
                    {Math.round(item.price_change_percentage_24h * 10 ** 2) /
                      10 ** 2}
                    %
                  </p>
                </div>
              </div>
            </div>
            <div className="ItemGroupGraph">
              <CoreItemGraph
                percentage={item.price_change_percentage_24h}
                id={item.id}
                Time={times}
              ></CoreItemGraph>
            </div>
          </div>
          <Link to='/Trade'>
            <div
              className="ItemGroupBottom"
              onMouseDown={() => {
                TabState.idCoin(item);
              }}
              onMouseUp={() => {
                TabState.ShowTab("Trade")
              }}
            >
              <p>View Asset</p>
            </div>
          </Link>
        </div>
      ))}
      <div
        className="SeeMore"
        onClick={() => {
          handleSeeMore();
        }}
      >
        <p>See more</p>
      </div>
    </div>
  );
};
export default HomeCoreItem;
