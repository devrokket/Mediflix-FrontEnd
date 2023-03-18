import './index.css';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Row1_1 from './components/Row1_1';
import Row1_2 from './components/Row1_2';
import Row2_1 from './components/Row2_1';
import Row2_2 from './components/Row2_2';
import Row2_3 from './components/Row2_3';
import Row3_1 from './components/Row3_1';
import Row3_2 from './components/Row3_2';
import Row3_3 from './components/Row3_3';

import { BrowserRouter } from 'react-router-dom';


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
                <div className='row1_1'><Row1_1 /></div>
                <div className='row1_2'><Row1_2 /></div>
              </div>
              <div className='side_margin'></div>
            </div>

            <div className='content_row2'>
              <div className='side_margin'></div>
              <div className='row1_wrap'>
                <div className='row2_1'><Row2_1 /></div>
                <div className='row2_2'><Row2_2 /></div>
                <div className='row2_3'><Row2_3 /></div>
              </div>
              <div className='side_margin'></div>
            </div>

            <div className='content_row3'>
              <div className='side_margin'></div>
              <div className='row1_wrap'>
                <div className='row3_1'><Row3_1 /></div>
                <div className='row3_2'><Row3_2 /></div>
                <div className='row3_3'><Row3_3 /></div>
                {/* <div className='row3_4'>임시 박스</div> */}
              </div>
              <div className='side_margin'></div>
            </div>
          </div>

          {/* <div className='slidebar2'>
            <Slidebar2 />
          </div> */}
        </div>


</section>
    </BrowserRouter>
  );
}

export default App;
