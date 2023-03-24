import React, { useState } from "react";
import "../assets/styles/sidebar-right.css";
import SidebarRightItem from "./SidebarRightItem";
import TodoList from "./TodoList";
import profile from "../assets/imgs/profile.png";
import setting from "../assets/imgs/settingbutton.png";
import logout from "../assets/imgs/logout.png";
import styled from 'styled-components';

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  font-size: 50px;
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

const CheckCircle = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: #FF0000;

`



const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;

const SmallBox = styled.div`
  display: absolute;
  border-radius: 10px;
  background-color: white;
  width: 230px;
  height: 297px;
  margin-top: 5px;
  padding: 5px;
  flex-wrap: wrap;
`;

const Icon = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 10px;
  margin-bottom: 25px;
`;

const IconWrapper = styled.div`
  display: flex;
  margin: 8px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  font-size: 17px;
  algign-items
  padding: 50px;
`

function SidebarRight() {  
  return (
    <div className="sidebar-right">
      <div className="my-profile">나의 프로필</div>

      <ProfileWrapper>
        <Profile src={profile}/> 
        <div>최현아/주임</div>
      </ProfileWrapper>
    
      
            
      

      <SmallBox>
      <b>관리자 목록</b>
      <IconWrapper>
        <Icon src={profile} alt="icon1" />
        <div>박세은 / 주임</div>
        <CheckCircle/>
      </IconWrapper>
      
      <IconWrapper>
        <Icon src={profile} alt="icon2" />
        <div>강은영 / 팀장</div>
        <CheckCircle/>
      </IconWrapper>
      <IconWrapper>
        <Icon src={profile} alt="icon3" />
        <div>손현석 / 주임</div>
        <div>30분전</div>
      </IconWrapper>
      <IconWrapper>
        <Icon src={profile} alt="icon4" />
        <div>이지수 / 주임</div>
        <div>10분전</div>
      </IconWrapper>
    </SmallBox>
    <TodoList/>
      
    <Setting src={setting} alt="Setting" /><br/>
    <Logout src={logout} alt="Logout" /> 

    </div>
    
  );
}

export default SidebarRight;

