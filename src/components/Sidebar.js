import React from 'react';
<<<<<<< HEAD
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

function Sidebar({ handleButton1Click, handleButton2Click, handleButton3Click }) {
    return (
    <div className={styles.sidebar}>
    <h3>Mediflix Sidebar</h3>
     <ul>
        <li>
          <Link to="/"><button>Home</button></Link>
        </li>
        <li>
          <Link to="/page1"><button>사용자트래픽</button></Link>
        </li>
        <li>
        <Link to="/page2"><button>업로드영상</button></Link>
        </li>
        <li>
        <Link to="/page3"><button>인기동영상</button></Link>
        </li>
     </ul>
    </div>
=======
import styles from '../assets/styles/Sidebar.module.css';

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
>>>>>>> f34cabab4a70174f3d4dc1ad812cecb97ab88896
    );
}

export default Sidebar;