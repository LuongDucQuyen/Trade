import React, { useState, createContext, useEffect, useRef } from "react";
const TabContext = createContext();
const TabPovider = ({ children }) => {
  const [itemChoose, setItemChoose] = useState("Home");
  const handleShowTab = (name) => {
    if (!(name === itemChoose)) {
      listItem[itemChoose] = "SidebarItem";
      setItemChoose(name);
      listItem[name] = "SidebarItem choose";
      setListItem({ ...listItem });
    }
  };
  const data = useRef()
  const [Id , setId] = useState({
    ath:"",
    ath_change_percentage:"",
    ath_date:"",
    atl:"",
    atl_change_percentage:"",
    atl_date:"",
    circulating_supply:"",
    current_price:"",
    fully_diluted_valuation:"",
    high_24h:"",
    id:"bitcoin",
    image:"",
    last_updated:"",
    low_24h:"",
    market_cap:"",
    market_cap_change_24h:"",
    market_cap_change_percentage_24h:"",
    market_cap_rank:"",
    max_supply:"",
    name:"",
    price_change_24h:"",
    price_change_percentage_24h:"",
    roi:{},
    symbol:"",
    total_supply:"",
    total_volume:"",
  })
  const handleGetIdCoin = (id) => {
    setId(id);
    data.current=id
  };
  const [listItem, setListItem] = useState({
    Home: "SidebarItem choose",
    Trade: "SidebarItem",
    Earn: "SidebarItem",
    Market: "SidebarItem",
    Derivatives: "SidebarItem",
    Settings: "SidebarItem",
  });
  const [listId, setListId] = useState([{current_price:"" , symbol:""},{current_price:"", symbol:""}])
  const handleGetListId = (arr)=>{
    setListId(arr)
  }
  const [coverFromId , setCoverFromId] = useState(0)
  const [coverToId , setCoverToId] = useState(1)
  const handleChooseItemFrom = (index)=>{
    setCoverFromId(index)
  }
  const handleChooseItemTo = (index)=>{
    setCoverToId(index)
  }
  const [currency, setCurrency] = useState("USD")
  const getCurrency = (currency)=>{
    setCurrency(currency)
  }
  const [showSideBar , setShowSideBar]=useState(false)
  const handleShowSideBar = ()=>{
    setShowSideBar(!showSideBar)
  }
  return (
    <TabContext.Provider
      value={{
        Tab: itemChoose,
        ShowTab: handleShowTab,
        listItem: listItem,
        idCoin: handleGetIdCoin,
        Id:Id,
        ListId: listId,
        GetListId: handleGetListId,
        coverFromId:coverFromId,
        coverToId:coverToId,
        ChooseItemFrom:handleChooseItemFrom,
        ChooseItemTo:handleChooseItemTo,
        currency:currency,
        getCurrency:getCurrency,
        showSideBar:showSideBar,
        handleShowSideBar:handleShowSideBar,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
export { TabContext, TabPovider };
