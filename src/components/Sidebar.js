import React from 'react';
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
    );
}

export default Sidebar;