import './styles.css';
import { useState } from 'react'

export default function HotButton() {
  const [count, setCount] = useState(0);
  let [colorBg, setColorBg] = useState('indigoBg');

  function handleClick() {
    switch (Math.floor((count+1)/3) % 6) {
      case 0:
        colorBg = 'indigoBg';
        break;
      case 1:
        colorBg = 'purpleBg';
        break;
      case 2:
        colorBg = 'pinkBg';
        break;
      case 3:
        colorBg = 'orangeBg';
        break;
      case 4:
        colorBg = 'yellowBg';
        break;
      case 5:
        colorBg = 'whiteBg';
        break;
      default:
        break;
    }
    setCount(count + 1);
    setColorBg(colorBg);

  }

  return (
  <div>
    <button className = {colorBg} onClick = {handleClick}>Hot Button</button>
    <p>{`Click Count: ${count}`}</p>
  </div>
  )
}
