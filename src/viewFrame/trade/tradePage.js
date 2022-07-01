import React, { useContext, useEffect, useRef, useState } from "react";
import "../../css/TradePage.css";
import HomeHeader from "../homePage/homePageChildren/homeHeader";
import axios from "axios";
import { TabContext } from "../../TabContext";
import TradeConvert from "./tradePageChildren/tradeConvert";
import TradeHistory from "./tradePageChildren/tradeHistory";
import TradeCandlestick from "./tradePageChildren/tradeCandlestick";
const TradePage = () => {
  const TabState = useContext(TabContext);
  const Item = TabState.Id;
  const data = useRef();
  const [candleBody, setCandleBody] = useState([["", "", "", ""]]);
  const [convert, setConvert] = useState("usd");
  const [price, setPrice] = useState(Item)
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${Item.id}/ohlc?vs_currency=${convert}&days=7`
      )
      .then((res) => {
        setCandleBody(res.data);
        data.current = res.data;
      })
      .catch((error) => console.log(error));
  }, [convert]);
  const lenght = candleBody.length;
  const [ show, setShow] = useState(false)
  const handleShowList = () => {
    setShow(!show)
  };
  useEffect(() =>{
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${convert}&ids=${Item.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setPrice(res.data[0])
      })
      .catch((error) => console.log(error));
  },[convert])
  const handleChangeConvert = (e) => {
    setConvert(e.target.id)
  }
  return (
    <div className="tradeMain">
      <HomeHeader></HomeHeader>
      <div className="tradeBody">
        <div className="tradeDayDetails">
          <div className="tradeDayDetailsItem" onClick={handleShowList}>
            <img src={Item.image} alt="" />
            <div className="tradeDayDetailsItemText">
              <h3>
                {Item.symbol.toUpperCase()}/{convert.toUpperCase()}
                <div className="homeOptionsSelectDownIcon tradeDayDetailsItemTextIcon">
                  <div className="homeOptionsDownIconLeft"></div>
                  <div className="homeOptionsDownIconRight"></div>
                </div>
              </h3>
              <p>{Item.name}</p>
            </div>
            <div className={ show ?"currency": "currency not" }>
              <ul>
                <li onClick={(e)=>{ handleChangeConvert(e)}}>
                  <p id="usd" > USD</p>
                </li>
                <li onClick={(e)=>{ handleChangeConvert(e)}}>
                  <p id="eur" > EUR</p>
                </li>
                <li  onClick={(e)=>{ handleChangeConvert(e)}}>
                  <p id="jpy" > JPY</p>
                </li>
                <li onClick={(e)=>{ handleChangeConvert(e)}}>
                  <p id="gbp" > GBP</p>
                </li>
                <li onClick={(e)=>{ handleChangeConvert(e)}}>
                  <p id="aud" > AUD</p>
                </li>
                <li onClick={(e)=>{ handleChangeConvert(e)}}>
                  <p id="cad" > CAD</p>
                </li>
                <li onClick={(e)=>{ handleChangeConvert(e)}}>
                  <p id="chf" > CHF</p>
                </li>
                <li onClick={(e)=>{ handleChangeConvert(e)}}>
                  <p id="cny" > CNY</p>
                </li>
                <li onClick={(e)=>{ handleChangeConvert(e)}}>
                  <p id="hkd" > HKD</p>
                </li>
                <li onClick={(e)=>{ handleChangeConvert(e)}}>
                  <p id="nzd" > NZD</p>
                </li>
                <li onClick={(e)=>{ handleChangeConvert(e)}}>
                  <p id="vnd" > VND</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="tradeDayDetailsItem">
            <div>
              <h3 className="tradeDayDetailsItem-title">24h Change</h3>
              <div className="tradeDayDetailsItemChangePercentage">
                <div
                  className={
                    Item.price_change_percentage_24h < 0
                      ? "change down"
                      : "change"
                  }
                ></div>
                <p
                  className={
                    Item.price_change_percentage_24h < 0
                      ? "tradeDayDetailsItem-Change red"
                      : "tradeDayDetailsItem-Change"
                  }
                >
                  {Item.price_change_percentage_24h}%
                </p>
              </div>
            </div>
          </div>
          <div className="tradeDayDetailsItem">
            <div>
              <h3 className="tradeDayDetailsItem-title">Last Pricea</h3>
              <p className="tradeDayDetailsItem-description">
                {price.current_price} {convert.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="tradeDayDetailsItem">
            <div>
              <h3 className="tradeDayDetailsItem-title">24H Low</h3>
              <p className="tradeDayDetailsItem-description">
                {price.low_24h} {convert.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="tradeDayDetailsItem">
            <div>
              <h3 className="tradeDayDetailsItem-title">24H High</h3>
              <p className="tradeDayDetailsItem-description">
                {price.high_24h} {convert.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="tradeDayDetailsItem">
            <div>
              <h3 className="tradeDayDetailsItem-title">Volume</h3>
              <p className="tradeDayDetailsItem-description">
                {price.total_volume} {convert.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
        <div className="tradeChart">
          <div className="tradeChart-chart">
            <div className="tradeChart-chart-title">
              <div className="tradeChart-chart-title-left">
                <div className="floating">
                  <p>Price chart</p>
                </div>
                <div>
                  <p>Deep chart</p>
                </div>
              </div>
              <div className="tradeChart-chart-title-right">
                <div className="tradeChart-chart-title-right-item">
                  <div className="tradeChart-chart-title-right-iconTime">
                    <div></div>
                    <div></div>
                  </div>
                  <p>30m</p>
                </div>
                <div className="tradeChart-chart-title-right-item">
                  <svg
                    width="22"
                    height="17"
                    viewBox="0 0 22 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 1L15.1379 7.54545L8.58621 2.81818L4.7931 9M1 7.54545L6.51724 9.72727L13.069 15.1818L19.2759 9M4.10345 10.4545L1 15.5455"
                      stroke="#ECEFF1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Indicator</p>
                </div>
                <div className="tradeChart-chart-title-right-item">
                  <div className="tradeChart-chart-title-right-iconArrow">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tradeChart-chart-price">
              <div className="tradeChart-chart-price-title">
                <p>
                  {Item.symbol.toUpperCase()}/{convert.toUpperCase()}
                </p>
              </div>
              <div className="tradeChart-chart-price-title">
                <p>O</p>
                <h6>{candleBody[lenght - 1][1]}</h6>
              </div>
              <div className="tradeChart-chart-price-title">
                <p>H</p>
                <h6>{candleBody[lenght - 1][2]}</h6>
              </div>
              <div className="tradeChart-chart-price-title">
                <p>L</p>
                <h6>{candleBody[lenght - 1][3]}</h6>
              </div>
              <div className="tradeChart-chart-price-title">
                <p>C</p>
                <h6>{candleBody[lenght - 1][4]}</h6>
              </div>
            </div>
            <TradeCandlestick
              convert={convert}
              candleBody={candleBody}
              lenght={candleBody.length}
            />
          </div>
          <TradeConvert></TradeConvert>
        </div>
        <TradeHistory />
      </div>
    </div>
  );
};
export default TradePage;
