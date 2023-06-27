import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton text="Toggle" color="green" />
      <ToggleButton text="Toggle" color="red" />
      <ToggleButton text="Toggle" color="yellow" />
    </div>
  );
}

export default App;
