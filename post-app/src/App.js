import logo from './813kqvYoRfL.png';
import './App.css';
import Hello from './Hello';
import GoodBye from './GoodBye';
import JSXExamples from './components/JSXExamples';

function App() {
  return (
    <div className="App">
      <Hello/>
      <JSXExamples />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ทุงทุงทุง <code>ซาฮูล่าา</code>
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
      <GoodBye></GoodBye>
    </div>
  );
}

export default App;
