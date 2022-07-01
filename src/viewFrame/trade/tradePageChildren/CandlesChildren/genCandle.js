import React, { useState, useEffect, useContext } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { TabContext } from "../../../../TabContext";
const GenCandle = (props) => {
  const TabState = useContext(TabContext);
  const Item = TabState.Id;
  const [day, setDay] = useState(30);
  const [value, setValue] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        display: false,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
      useFillColor: true,
    },
  });
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${Item.id}/ohlc?vs_currency=${props.convert}&days=${day}`
      )
      .then((res) => {
        const data = res.data.map((item) => {
          let x = new Date(item[0]);
          let y = [item[1], item[2], item[3], item[4]];
          return {
            x: x,
            y: y,
          };
        });
        setValue({
          series: [
            {
              data: data,
            },
          ],
          options: {
            chart: {
              type: "candlestick",
              height: 350,
            },
            title: {
              display: false,
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          },
        });
      })
      .catch((error) => console.log(error));
  }, [day]);
  const handleChangeDay = (e) => {
    setDays(e.target.innerText)
    setDay(e.target.id)
  }
  const [showList , setShowList] = useState(false)
  const [ days, setDays] = useState("30 day")
  const handleShowList = ()=>{
    setShowList(!showList)
  }
  return (
    <>
      <div className="tradeDayListMenu">
        <div className="tradeDayListMenuButton" onClick={handleShowList}>
          <p>{days}</p>
          <div className="homeOptionsSelectDownIcon tradeDown">
            <div className="homeOptionsDownIconLeft"></div>
            <div className="homeOptionsDownIconRight"></div>
          </div>
          <ul className={showList ? "":"tradeListClose"}>
            <li onClick={(e)=>{handleChangeDay(e)}} id="1">1 day</li>
            <li onClick={(e)=>{handleChangeDay(e)}} id="7">7 day</li>
            <li onClick={(e)=>{handleChangeDay(e)}} id="14">14 day</li>
            <li onClick={(e)=>{handleChangeDay(e)}} id="30">30 day</li>
            <li onClick={(e)=>{handleChangeDay(e)}} id="90">90 day</li>
            <li onClick={(e)=>{handleChangeDay(e)}} id="180">180 day</li>
            <li onClick={(e)=>{handleChangeDay(e)}} id="365">365 day</li>
            <li onClick={(e)=>{handleChangeDay(e)}} id="max">Max</li>
          </ul>
        </div>
      </div>
      <ReactApexChart
        options={value.options}
        series={value.series}
        type="candlestick"
        width="100%"
        height="350px"
      />
    </>
  );
};
export default GenCandle;
