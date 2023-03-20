import React, { useState } from "react";
import "../css/sidebar-right.css";
import SidebarRightItem from "./SidebarRightItem";
import profile from "../assets/imgs/profile.png";
import styled from "styled-components";
import setting from "../assets/imgs/settingbutton.png";
import logout from "../assets/imgs/logout.png";
import arrow from "../assets/imgs/arrow.png";

const Arrow = styled.img.attrs({
  onClick: props => props.onClick
})`
  width: 14px;
  height: 14px;
  border-radius: 100%;
  position: absolute;
  top: 20px;
  left: 10px;
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
  position: absolute;
  top: 700px;
  right: 10px;
`;


const Logout = styled.img`
  width: 70px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  top: 730px;
  right: 10px;
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
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin-top: 10px;
  white-space: pre-wrap;
  padding: 5px;
  line-height: 30px;
  text-align: left;
  flex-wrap: wrap;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: left;
`;

function SidebarRight() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const menus = [
    { name: "나의 프로필", extra: <Profile src={profile} alt="Profile" /> },
    { name: "", extra: 
    <SmallBox>
      <div className="title">관리자 목록</div><br/>
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
        <div className="sidebar-right-item-extra-boxes">
          <div className="sidebar-right-item-extra-box">직전주 LIFE 신규 게시글 리뷰하기</div>
          <div className="sidebar-right-item-extra-box">1분기 페이지 이탈률 정리 후 보고</div>
          <div className="sidebar-right-item-extra-box">ONAIR 콘텐츠 실시간 모니터링 보고서 작성</div>
          <div>지난 업무보드 히스토리 보러가기</div>
        </div>
      ),
     }
  ];

  return (
    <div className="sidebar-right">
      <Arrow src={arrow} alt="Arrow" onClick={toggleSidebar} />
      <MenuWrapper>
        {menus.map((menu, index) => {
          return (
            <SidebarRightItem
              key={index}
              menu={menu}
              isActive={isOpen}
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
