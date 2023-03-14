import logo from "../assets/imgs/mediflix_white.png";
import "../assets/styles/Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="title">
                <img src={logo} className="logo"></img><p className="title-text">Manage System</p>
            </div>
            <nav className="nav">
                <ul className="nav__list">
                <li className="nav__item"><a href="https://mediflix.co.kr/">메디플릭스 바로가기</a></li>
                <li className="nav__item"><a href="http://www.donga-st.com/Main.da">동아ST 바로가기</a></li>
                </ul>
            </nav>
        </header>
      );
}