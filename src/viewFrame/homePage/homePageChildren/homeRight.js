import React ,{useContext} from "react";
import "../../../css/homeRight.css";
import HomeCircle from "./HomeCircle";
import { TabContext } from "../../../TabContext";
const HomeRight = () => {
  const TabState = useContext(TabContext);
  const Item = TabState.Id;
  return (
    <div className="homeRight">
      <div className="homeRightMain">
        <div className="homeRightMainWithdraw">
          <div className="homeRightCircleWapper">
          <HomeCircle></HomeCircle>
          </div>
          <h4 className="homeRightTitle">Total Balance</h4>
          <div className="homeRightName">
            <p>BTC</p>
          </div>
          <h4 className="homeRightNumberChange">0.1465132</h4>
          <div className="homeRightNumberTotal">
            <p>{Item.total_supply} </p>
            <div className="homeRightPercentChange">
              <div></div>
              <p>2%</p>
            </div>
          </div>
          <button className="Withdraw">Withdraw</button>
        </div>
        <div className="homeRightLastestActivites">
          <h4>Lastest Activites</h4>
          <div className="LastestActivitesMenu">
            <div className="LastestActivitesMenuItem"></div>
            <div className="LastestActivitesMenuItem"></div>
            <div className="LastestActivitesMenuItem"></div>
          </div>
        </div>
        <div className="LastestActivitesProduct">
          <img src={Item.image} alt=""></img>
          <div className="LastestActivitesProductText">
            <h3>withdrew USDT</h3>
            <p className="LastestActivitesProductTextStatus">Complete</p>
            <p className="LastestActivitesProductTextDay">Nov 22, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeRight;
