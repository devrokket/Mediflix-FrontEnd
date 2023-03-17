import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'; // import 추가한 부분.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

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