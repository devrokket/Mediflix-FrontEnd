import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faUsers,
  faTimes,
  faCog,
  faSignOut,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/SidebarRight.css";
import TodoList from "./TodoList";
import styled from 'styled-components';
import MyProfile from "./MyProfile";
import ManagerBox from "./ManagerBox";

const BottomBlock = styled.div`
  font-size: 20px;
  margin-top: 250px;
  margin-right:
  padding: 50px;
  algign-items: center;
`

const ThreeIcons = styled.div`
  font-size: 35px;
  margin-top: 380px;
  display: fixed;
  align-items: center;
  & > * {
    margin-bottom: 50px;  /* 아이콘 간격 조정 */
  }
`;


function SidebarRight() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <div className="page">

        <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="trigger" onClick={handleTrigger}>
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <>
                <ThreeIcons>
                  <FontAwesomeIcon icon={faBars} />
                  <FontAwesomeIcon icon={faUser} />
                  <FontAwesomeIcon icon={faUsers}/>
                  <FontAwesomeIcon icon={faNoteSticky} />
                </ThreeIcons> 
              </>
            )}
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
            <FontAwesomeIcon icon={faCog} />
            <FontAwesomeIcon icon={faSignOut} />
          </BottomBlock>
        </div>
      </div>
    </div>
    
  );
}

export default SidebarRight;
