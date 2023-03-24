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
  margin-top: 260px;
  margin-right:
  padding: 50px;
  algign-items: center;
`

const ThreeIcons = styled.div`
  font-size: 35px;
  margin-top: 380px;
  display: inline-block;
  align-items: center;
  & > * {
    margin-bottom: 50px;
  }
`;

const TodoKey = styled.div`
padding-top: 700px;
font-weight: bold;
margin-left: 12px;
font-size: 16px;
`


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
              <div className="profile-title">나의 프로필</div>
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
              <TodoKey>
              업무보드
              </TodoKey>
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
