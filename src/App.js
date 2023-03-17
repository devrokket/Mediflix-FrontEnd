import './index.css';
import './App.css';
<<<<<<< HEAD
import Sidebar from './components/Sidebar'; // import 추가한 부분.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
=======
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter} from 'react-router-dom';
>>>>>>> f34cabab4a70174f3d4dc1ad812cecb97ab88896

function App() {
  const handleButton1Click = () => {
    console.log('버튼 1이 클릭되었습니다.');
  };

  const handleButton2Click = () => {
    console.log('버튼 2가 클릭되었습니다.');
  };

  const handleButton3Click = () => {
    console.log('버튼 3이 클릭되었습니다.');
  };

<<<<<<< HEAD
  
  return (
    <div className="App">
      <Router>
        <Sidebar
          handleButton1Click={handleButton1Click}
          handleButton2Click={handleButton2Click}
          handleButton3Click={handleButton3Click}
        />
        <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
=======
  return (
// <<<<<<< HEAD
    <BrowserRouter>
      <section className="box">
        <header className="header_wrapper">
          <Header />
        </header>
        <div className='next_sidebar'>
          <aside className='sidebar_wrapper'>
            <Sidebar 
            onButton1Click={handleButton1Click}
            onButton2Click={handleButton2Click}
            onButton3Click={handleButton3Click}
            />
          </aside>

          <div>
            <div className='content_row1'>
              <div className='side_margin'></div>
              <div className='row1_wrap'>
              <div className='row1_1'>서비스 방문수/유지수/활성사용자수</div>
              <div className='row1_2'>그래프 설명</div>
              </div>
              <div className='side_margin'></div>
            </div>

            <div className='content_row2'>
              <div className='side_margin'></div>
              <div className='row1_wrap'>
              <div className='row2_1'>서비스 규모 Check</div>
              <div className='row2_2'>조회수 TOP 콘텐츠</div>
              <div className='row2_3'>ON AIR 콘텐츠 관리</div>
              </div>
              <div className='side_margin'></div>
            </div>

            <div className='content_row3'>
              <div className='side_margin'></div>
              <div className='row1_wrap'>
              <div className='row3_1'>실시간 검색어 순위</div>
              <div className='row3_2'>의학 전공별 비중</div>
              <div className='row3_3'>지역별 비교</div>
              <div className='row3_4'>임시 박스</div>
              </div>
              <div className='side_margin'></div>
            </div>
          </div>
        </div>

      </section>

      {/* <div className="App">
      <Sidebar 
        onButton1Click={handleButton1Click}
        onButton2Click={handleButton2Click}
        onButton3Click={handleButton3Click}
      /></div> */}

    </BrowserRouter>
// =======
//     <div className="App">
//       <Sidebar 
//         onButton1Click={handleButton1Click}
//         onButton2Click={handleButton2Click}
//         onButton3Click={handleButton3Click}
//       />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
// >>>>>>> ef9c8f990d7472c6e4515bc6916b972ca2bbc8ea
  );
}

export default App;
 
>>>>>>> f34cabab4a70174f3d4dc1ad812cecb97ab88896
