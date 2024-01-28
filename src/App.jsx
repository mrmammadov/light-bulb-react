import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isOn, setIsOn] = useState(false);
  let src;


  function toggle(params) {
    const onbtn = document.querySelector('.on');
    const offbtn = document.querySelector('.off');

    if (isOn) {
      onbtn.classList.remove('box-clicked');
      offbtn.classList.add('box-clicked');
      setIsOn(false);

    } else {
      offbtn.classList.remove('box-clicked');
      onbtn.classList.add('box-clicked');
      setIsOn(true);
    }
  }


  if (isOn) {
    console.log('on');
    src = "./public/bulb_on.jpg";
  } else {
    src = "./public/bulb_off.jpg";
  }
  

  return (
    <div className="container">
      <div className="boxes">
        <button className="box on" onClick={toggle}>Switch on</button>
        <button className="box off" onClick={toggle}>Switch off</button>
      </div>

      <div className="lamp">
        <img src={src} alt="" />
      </div>
      {isOn && (
        <audio autoPlay loop src="./public/LightTurningOn.mp3" type="audio/mp3">

        </audio>
      )}
    </div>
  )
}

export default App
