import logo from './DwayneMack.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Dwayne Mack and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/DwayneM20"
          target="_blank"
          rel="noopener noreferrer"
        >
         Check me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
