import React from 'react'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Sidebar from './viewFrame/sidebar'
import HomePage from './viewFrame/homePage/homePage'
import TradePage from './viewFrame/trade/tradePage'
import EarnPage from './viewFrame/EarnPage/EarnPage'
import MarketPage from './viewFrame/MarketTab/MarketPage'
import DerivativesPage from './viewFrame/DerivativesTab/DerivativesPage'
import SettingsPage from './viewFrame/SettingsTab/SettingsPage'
import "./css/App.css"
import {useContext} from "react";
import { TabContext } from "./TabContext"

function App() {
  const TabState = useContext(TabContext)
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar ClassItem = {TabState.listItem} ></Sidebar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Trade" element={<TradePage />} />
          <Route path="Earn" element={<EarnPage />} />
          <Route path="Market" element={<MarketPage />} />
          <Route path="Derivatives" element={<DerivativesPage />} />
          <Route path="Settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
