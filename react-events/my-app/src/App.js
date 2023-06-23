import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {

  function handleCustomClick(text) {
    alert('You clicked ' + text);
  }

  return (
    <div className="App">
      <CustomButton
        text="Cool Button"
        color="blue"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Warm Button"
        color="orange"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Hot Button"
        color="red"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
