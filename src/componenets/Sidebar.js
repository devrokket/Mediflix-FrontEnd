import React from 'react';
import styles from './Sidebar.module.css';

function Sidebar({ handleButton1Click, handleButton2Click, handleButton3Click }) {
    // const handleButton1Click = () => {
    //     // button1 click function
    //     console.log("버튼1클릭");
    // };
    // const handleButton2Click = () => {
    //     // button1 click function
    //     console.log("버튼2클릭");
    // };
    // const handleButton3Click = () => {
    //     // button1 click function
    //     console.log("버튼3클릭");   
    // };
    return (
        <div className={styles.sidebar}>
            <button onClick={handleButton1Click}>실시간 사용자 수</button>
            <button onClick={handleButton2Click}>실시간 영상 조회수</button>
            <button onClick={handleButton3Click}>실시간 채팅</button>
        </div>
    );
}

export default Sidebar;