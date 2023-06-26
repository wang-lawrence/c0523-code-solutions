import './styles.css'
import { useState } from 'react'

export default function ToggleSwitch () {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className = "flex-container">
      <div className={isOn ? 'button-container-on' : 'button-container-off'} onClick={() => setIsOn(!isOn)}>
        <div className={isOn ? 'toggle-button-on' : 'toggle-button-off'}></div>
      </div>
      <p>{isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
}
