import './App.css';
import SampleGame from './stories/sampleData'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{SampleGame.name}</p>
      </header>
    </div>
  );
}

export default App;
