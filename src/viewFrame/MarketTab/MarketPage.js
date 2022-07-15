import React from "react";
import "../../css/nodata.css";
import HomeHeader from "../homePage/homePageChildren/homeHeader";
const MarketPage = ()=>{
    return (
        <div className="noData">
            <HomeHeader></HomeHeader>
            <h3 className="No-data-text">No Data</h3>
        </div>
    )
}
export default MarketPage