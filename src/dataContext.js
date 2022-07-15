import React, {useState , createContext, useLayoutEffect,useContext} from "react";
import { TabContext} from "./TabContext"
import axios from "axios";
const DataContext = createContext()
const DataPovider = ({children}) => {
    const [data , setData] = useState([])
    const TabState = useContext(TabContext)
    useLayoutEffect(()=>{
        axios
        .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${TabState.currency}`)
        .then((res) => {
                setData(res.data)
                TabState.idCoin(res.data[0])
                TabState.GetListId(res.data)
        })
        .catch((error) => console.log(error))
    },[TabState.currency])

    return <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
}
export {DataContext , DataPovider}