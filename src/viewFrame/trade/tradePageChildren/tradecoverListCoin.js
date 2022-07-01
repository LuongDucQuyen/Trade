import React, { useState , useContext } from "react";
import'../../../css/TradecoverListCoin.css';
import { TabContext } from "../../../TabContext";
const TradecoverListCoin=(props)=>{
    const [Show , setShow] = useState(true)
    const TabState = useContext(TabContext);
    const listItem = TabState.ListId
    const handleShow = ()=>{
        setShow(false);
    }
    return (
        <div className={Show ? "tradecoverListCoin ShowListCoin" : "tradecoverListCoin"} onClick={handleShow} >
            <ul>
                {listItem.map((item,index)=>{
                    return(
                        <li key = {item.id} onClick={()=>{props.convert(index)}}>
                            <img src={item.image} alt=""></img>
                            <p>{item.symbol.toUpperCase()}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default TradecoverListCoin