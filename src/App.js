import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import { useState, useEffect } from 'react';

function App() {
  const [etat, setEtat] = useState(false);

  window.addEventListener('scroll', () => {
    let l = document.querySelector('.navv');
    let top = window.scrollY;
    if (top > 20) {
     
      l.style.position = "fixed";
      l.zIndex = "2000";
      l.style.background = "#146f5b";
      l.style.color = "#c19a5d";
    }
    else {
      l.style.position = "static";
      l.style.background = "white";
      l.style.color = "black";
    }
  })

  return (
    <div className="App">

      <div className="navv">
        <Nav />
      </div>
      <Home />
xs
    </div>
  );
}

export default App;
