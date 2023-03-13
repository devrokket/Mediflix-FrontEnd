import logo from './logo.svg';
import './App.css';
import Sidebar from './componenets/Sidebar';

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
      <Sidebar 
        onButton1Click={handleButton1Click}
        onButton2Click={handleButton2Click}
        onButton3Click={handleButton3Click}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
