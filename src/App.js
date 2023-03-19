import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';

import Home from "./pages/Home";
import ServiceUserManage from "./pages/ServiceUserManage";
import ContentsManage from "./pages/ContentsManage";
import PartnerMange from "./pages/PartnerMange";

function App() {

  return (
    <div className="App">
      
        <BrowserRouter>
          <SidebarRight></SidebarRight>
          <SidebarLeft/>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/ServiceUserManage" component={ServiceUserManage} />
            <Route path="/ContentsManage" component={ContentsManage} />
            <Route path="/PartnerMange" component={PartnerMange} />
          </Routes>
        </BrowserRouter>
      
        
    </div>
  );
}

export default App;
