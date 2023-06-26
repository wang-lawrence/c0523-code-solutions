// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CustomButton from './CustomButton';
import ClickCount from './ClickCount';

function App() {
  const [count, setCount] = useState(0);

  function handleClickDown() {
    setCount(count - 1);
  }

  function handleClickUp() {
    setCount(count + 1);
  }

  return (
  <div className="App">
    <CustomButton text="Down" count={count} onClick={handleClickDown} />
    <ClickCount text = {count} />
    <CustomButton text="Up" count={count} onClick={handleClickUp} />
  </div>);
};

export default App;
