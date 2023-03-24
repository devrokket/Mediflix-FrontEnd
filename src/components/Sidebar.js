import React from 'react';
import styles from '../assets/styles/Sidebar.module.css';

function Sidebar({ onButton1Click, onButton2Click, onButton3Click }) {
    return (
        <div className={styles.sidebar}>
            <button onClick={onButton1Click}>실시간 사용자 수</button>
            <button onClick={onButton2Click}>실시간 영상 조회수</button>
            <button onClick={onButton3Click}>실시간 채팅</button>
        </div>
    );
}
export default Sidebar;