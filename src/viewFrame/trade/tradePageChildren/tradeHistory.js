import React from "react";
import "../../../css/tradeHistory.css";
const TradeHistory = () => {
  return (
    <div className="tradeHistory">
      <div className="tradeHistoryTitle">
        <div className="tradeHistoryTitleItem tradeHistoryTitleChoose">
          <h3>Trade History</h3>
        </div>
        <div className="tradeHistoryTitleItem">
          <h3>My positions</h3>
        </div>
        <div className="tradeHistoryTitleItem">
          <h3>Price Alerts</h3>
        </div>
        <div className="tradeHistoryTitleItem">
          <h3>My swaps</h3>
        </div>
      </div>
      <div className="tradeHistoryMain">
        <div className="tradeHistoryMainLeft">
          <table>
            <thead>
              <tr>
                <th>Txn Hash</th>
                <th>Method</th>
                <th>Age</th>
                <th>From</th>
                <th>To</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0x2dec4f321g6v5...</td>
                <td>
                  <p>Execute Aution </p>
                </td>
                <td>22 mins ago</td>
                <td>
                  <p className="inHistory">In</p>0x54ada4g6v5...
                </td>
                <td>0x2deced18g6v5...</td>
                <td>871,110,24</td>
              </tr>
              <tr>
                <td>0x2dec4f321g6v5...</td>
                <td>
                  <p>Execute Aution </p>
                </td>
                <td>22 mins ago</td>
                <td>
                  <p className="oUTHistory">OUT</p>0x54ada4g6v5...
                </td>
                <td>0x2deced18g6v5...</td>
                <td>871,110,24</td>
              </tr>
            </tbody>
          </table>
          <h3>See More</h3>
        </div>
        <div className="tradeHistoryMainRight">
          <table>
            <thead>
              <th>Price(USDT)</th>
              <th>Size(BTC)</th>
              <th>Sum(BTC)</th>
            </thead>
            <tbody>
              <tr>
                <td className="tradeRed">40005</td>
                <td>40005</td>
                <td>40005</td>
              </tr>
            </tbody>
          </table>
          <div className="tradeHistoryRaises">
            <h3>39,975 </h3>
            <div className="tradeHistoryRaises-Icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>39,992</p>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="tradeGreen">40005</td>
                <td>40005</td>
                <td>40005</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TradeHistory;
