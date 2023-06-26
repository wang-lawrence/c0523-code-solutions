import './styles.css';
import { useState } from 'react'

export default function HotButton() {
  const [count, setCount] = useState(0);

  let colorBg = 'indigoBg';
  let colorText = 'whiteText';

  switch (Math.floor(count/3) % 6) {
    case 0:
      colorBg = 'indigoBg';
      colorText = 'whiteText';
      break;
    case 1:
      colorBg = 'purpleBg';
      colorText = 'whiteText';
      break;
    case 2:
      colorBg = 'pinkBg';
      colorText = 'whiteText';
      break;
    case 3:
      colorBg = 'orangeBg';
      colorText = 'blackText';
      break;
    case 4:
      colorBg = 'yellowBg';
      colorText = 'blackText';
      break;
    case 5:
      colorBg = 'whiteBg';
      colorText = 'blackText';
      break;
    default:
      break;
  }

  return (
  <div>
    <button className = {`${colorBg} ${colorText}`} onClick = {() => setCount(count + 1)}>Hot Button</button>
    <p>{`Click Count: ${count}`}</p>
  </div>
  )
}
