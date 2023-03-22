import React, { useState } from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import Row1_1 from './components/Row1_1';
import Row1_2 from './components/Row1_2';
import Row2_1 from './components/Row2_1';
import Row2_2 from './components/Row2_2';
import Row2_3 from './components/Row2_3';
import Row3_1 from './components/Row3_1';
import Row3_2 from './components/Row3_2';
import Row3_3 from './components/Row3_3';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Home from "./pages/Home";
import ServiceUserManage from "./pages/ServiceUserManage";
import ContentsManage from "./pages/ContentsManage";
import PartnerMange from "./pages/PartnerMange";
import TodoList from './components/TodoList';

const API = "http://13.124.122.107:8080/logs?selectDate=2023-03-24T06:02:24";

function App() {
  return (
    <BrowserRouter>

      <section className="box">
        <header className="header_wrapper">
          <Header />
        </header>
        <div className='next_sidebar'>
          <aside className='sidebar_wrapper'>
            <SidebarLeft />
          </aside>
          <div>
            <div className='content_row1'>
              <div className='side_margin'></div>
              <div className='row1_wrap'>
                <div className='row1_1'><Row1_1 /></div>
                <div className='row1_2'><Row1_2 /></div>
              </div>
              <div className='side_margin'></div>
            </div>
            <div className='content_row2'>
              <div className='side_margin'></div>
              <div className='row1_wrap'>
                <div className='row2_1'><Row2_1 /></div>
                <div className='row2_2'><Row2_2 /></div>
                <div className='row2_3'><Row2_3 /></div>
              </div>
              <div className='side_margin'></div>
            </div>

            <div className='content_row3'>
              <div className='side_margin'></div>
              <div className='row1_wrap'>
                <div className='row3_1'><Row3_1 /></div>
                <div className='row3_2'><Row3_2 /></div>
                <div className='row3_3'><Row3_3 /></div>
              </div>
              <div className='side_margin'></div>
            </div>
          </div>
          <div className='sidebar2'>
            <aside className='sidebar_wrapper'>
              {/* <SidebarRight /> */}
            </aside>
          </div>
        </div>
      </section>
    </BrowserRouter>






  );
}

export default App;




{/* <SidebarLeft/>
            <Routes>
              <Route path="/" exact component={Home} />
              <Route path="/ServiceUserManage" component={ServiceUserManage} />
              <Route path="/ContentsManage" component={ContentsManage} />
              <Route path="/PartnerMange" component={PartnerMange} />
            </Routes> */}
