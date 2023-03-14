import './index.css';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter} from 'react-router-dom';

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
      <div className="header_wrapper">
        <Header />
        <div className='sidebar_wrapper'>
        <Sidebar 
        onButton1Click={handleButton1Click}
        onButton2Click={handleButton2Click}
        onButton3Click={handleButton3Click}
        /></div>
      </div>

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
 