import React, { useState } from 'react';
import "../assets/styles/RightSidebar.css";

function Navbar() {
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
  
    return (
      <>
        <div className={`l-navbar ${isExpanded ? 'expander' : ''}`} id="navbar">
          <nav className="nav">
            <div>
              <div className="nav__brand">
                <ion-icon name="menu-outline" className="nav__toggle" id="nav-toggle" onClick={handleToggleClick}></ion-icon>
                <a href="#" className="nav__logo">Bedimcode</a>
              </div>
              <div className="nav__list">
                <a href="#" className="nav__link active" onClick={handleLinkClick}>
                  <ion-icon name="home-outline" className="nav__icon"></ion-icon>
                  <span className="nav_name">Dashboard</span>
                </a>
                <a href="#" className="nav__link" onClick={handleLinkClick}>
                  <ion-icon name="chatbubbles-outline" className="nav__icon"></ion-icon>
                  <span className="nav_name">Messenger</span>
                </a>
                <div className="nav__link">
                  <ion-icon name="folder-outline" className="nav__icon"></ion-icon>
                  <span className="nav_name">Projects</span>
                  <ion-icon name="chevron-down-outline" className="collapse__link" onClick={handleCollapseClick}></ion-icon>
                  <ul className="collapse__menu">
                    <a href="#" className="collapse__sublink" onClick={handleLinkClick}>Data</a>
                    <a href="#" className="collapse__sublink" onClick={handleLinkClick}>Group</a>
                    <a href="#" className="collapse__sublink" onClick={handleLinkClick}>Members</a>
                  </ul>
                </div>
                <a href="#" className="nav__link" onClick={handleLinkClick}>
                  <ion-icon name="pie-chart-outline" className="nav__icon"></ion-icon>
                  <span className="nav_name">Analytics</span>
                </a>
                <div className="nav__link">
                  <ion-icon name="people-outline" className="nav__icon"></ion-icon>
                  <span className="nav_name">Team</span>
                  <ion-icon name="chevron-down-outline" className="collapse__link" onClick={handleCollapseClick}></ion-icon>
                  <ul className="collapse__menu">
                    <a href="#" className="collapse__sublink" onClick={handleLinkClick}>Data</a>
                    <a href="#" className="collapse__sublink" onClick={handleLinkClick}>Group</a>

                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
  
  export default Navbar;