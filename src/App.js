
import './App.css';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
//import vid from './assets/man.mp4'

function App() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer","Athlete", "Designer"],
      startDelay: 150,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true
    })
  })


  return (
    <div className="App">
      <div className='over' ></div>
      {/* <video src={vid} autoPlay muted loop /> */}
      <div className='content'>
        <h1>Hello I'm Herumb and   <br></br> I'm a <span className='change' ref={el} ></span>  </h1>
      </div>

    </div>
  );
}

export default App;
