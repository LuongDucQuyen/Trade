import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../css/CoreItemGraph.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const CoreItemGraph = (props) => {
  const [ApiPrice , setApiPrice] = useState([])
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${props.id}/ohlc?vs_currency=usd&days=1`
      )
      .then((res) => {

        setApiPrice(res.data)
      })
      .catch((error) => console.log(error));
  },[]);
  const [labels, setLabels] = useState([]);
  const [percentage, setPercentage] = useState([]);
  const [borderColor, setBorderColor] = useState("#8AFF6C");
  useEffect(() =>{
    setLabels( ApiPrice.map((item)=>{
      return item[0]
    }))
    setPercentage( ApiPrice.map((item)=>{
      return item[1]
    }))
      setBorderColor("#8AFF6C")

  },[ApiPrice])
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    aspectRatio: 2.45,
    subtitle: {
      display: false,
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: percentage,
        borderColor: borderColor,
        backgroundColor: borderColor,
        tension: 0.4,
        fill: false,
        display: false,
      },
    ],
  };
  return (
    <div className="ItemGraph">
      <Line data={data} options={options}></Line>
    </div>
  );
};
export default CoreItemGraph;
