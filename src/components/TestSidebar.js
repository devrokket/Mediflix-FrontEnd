import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCog,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/TestSidebar.css";
import TodoList from "./TodoList";
import styled from 'styled-components';
import MyProfile from "./MyProfile";
import ManagerBox from "./ManagerBox";

const BottomBlock = styled.div`
  margin-top: 200px;
  padding: 50px;
  algign-items: center;
`
function TestSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <div className="page">

        <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
          <div className="trigger" onClick={handleTrigger}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>

          <div className="sidebar-position">
            <span>
              <b>나의 프로필</b>
            <MyProfile/>
            </span>
            
            
          </div>
          
          <div className="sidebar-position">
            <span>   
              <ManagerBox/>
            </span>
          </div>

          <div className="sidebar-position">
            <span>
              <TodoList/>         
            </span>
          </div>
          <BottomBlock>
            <FontAwesomeIcon icon={faCog} text="설정" />
            <FontAwesomeIcon icon={faSignOut} />
          </BottomBlock>
        </div>
      </div>
    </div>
    
  );
}

export default TestSidebar;
