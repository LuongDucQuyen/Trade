import React from 'react';
import "../../../css/tradeCandlestcik.css";
import GenCandle from './CandlesChildren/genCandle';
const TradeCandlestick =(props)=>{
    return <>
    <div className="tradeCandlestick"
    >
        <GenCandle convert = {props.convert} candleBody = {props.candleBody} lenght ={props.length} day = {props.day}/>
    </div>
    </>
}
export default TradeCandlestick