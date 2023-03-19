import React from "react";
import "../css/sidebar-left.css";
import { Link, useLocation } from "react-router-dom";
import SidebarLeftItem from "./SidebarLeftItem";
import dashboardIcon from "../assets/imgs/dashboardicon.png";
import userIcon from "../assets/imgs/serviceuser.png";
import contentIcon from "../assets/imgs/contents.png";
import blackIcon from "../assets/imgs/blackicon.png";



function SidebarLeft() {

  // URL의 path값을 받아올 수 있다.
  const pathName = useLocation().pathname;
  
  const menus = [
    { name: "대시보드", path: "/", image: dashboardIcon},
    { name: "서비스 유저 관리", path: "/members", image: userIcon},
    { name: "콘텐츠 관리", path: "/cashes", image: contentIcon },
    { name: "연자/파트너 관리", path: "/partneer", image: blackIcon }
  ];

  return (
    <div className="sidebar-left">
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarLeftItem
              menu={menu}
              isActive={pathName === menu.path ? true : false}
            >              
            </SidebarLeftItem>
          </Link>
        );
      })}
    </div>
  );
}

export default SidebarLeft;