import logo from './logo.svg';
import './App.css';
import './CustomButton.css';

function App() {
  return (
    <div className="App">
      <CustomButton text={'I'} color={'red'} />
      <CustomButton text={'know'} color={'green'} />
      <CustomButton text={'React!'} color={'blue'} />
    </div>
  );
}

function CustomButton({text, color}) {

  return <button className = {color}>{text}</button>
}

export default App;
