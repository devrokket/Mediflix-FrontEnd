import React, { useState } from "react";
import "../assets/styles/sidebar-right.css";
import SidebarRightItem from "./SidebarRightItem";
import TodoList from "./TodoList";
import profile from "../assets/imgs/profile.png";
import styled from "styled-components";
import setting from "../assets/imgs/settingbutton.png";
import logout from "../assets/imgs/logout.png";
import arrow from "../assets/imgs/arrow.png";

const Arrow = styled.img`
  width: 14px;
  height: 14px;
  border-radius: 100%;
  top: 20px;
  left: 10px;
  cursor: pointer; 
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const Setting = styled.img`
  width: 70px;
  height: 30px;
  border-radius: 100%;
  top: 700px;
`;


const Logout = styled.img`
  width: 70px;
  height: 30px;
  border-radius: 100%;
  top: 730px;
`;



const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;

const SmallBox = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: white;
  width: 207px;
  height: 200px;
  margin-top: 5px;
  padding: 5px;
  flex-wrap: wrap;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
`;

function SidebarRight() {  
  // 참고 코드 시작
  const [isExpanded, setIsExpanded] = useState(false);
  
  function handleToggleClick() {
    setIsExpanded(!isExpanded);
  }
  
  function handleLinkClick() {
    setIsExpanded(false);
  }
  
  function handleCollapseClick(e) {
    e.preventDefault();
    e.currentTarget.classList.toggle('showCollapse');
    e.currentTarget.previousElementSibling.classList.toggle('rotate');
  }

  // 참고 코드 끝

  const menus = [
    { name: "나의 프로필", extra: <Profile src={profile} alt="Profile" /> },
    { name: "", extra: 
    <SmallBox>
      <div>ddd</div>
      <IconWrapper>
        <Icon src={profile} alt="icon1" />
        <div>박세은 / 주임</div>
      </IconWrapper>
      <IconWrapper>
        <Icon src={profile} alt="icon2" />
        <div>강은영 / 팀장</div>
      </IconWrapper>
      <IconWrapper>
        <Icon src={profile} alt="icon3" />
        <div>손현석 / 주임</div>
      </IconWrapper>
      <IconWrapper>
        <Icon src={profile} alt="icon4" />
        <div>이지수 / 주임</div>
      </IconWrapper>
  </SmallBox>
     },
    {
       name: "업무보드",
       extra: (
        <div className="TodoList">
          <TodoList />
        </div>
        
      ),
     }
  ];

  return (
    <div className="sidebar-right">
      <Arrow src={arrow} alt="Arrow" />
      <MenuWrapper>
        {menus.map((menu, index) => {
          return (
            <SidebarRightItem
              key={index}
              menu={menu}
              extra={menu.extra} 
            />
            
          );
        })}
      </MenuWrapper>
      <Setting src={setting} alt="Setting" /><br/>
      <Logout src={logout} alt="Logout" /> 
    </div>
  );
}

export default SidebarRight;
