import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import { useState, useEffect } from 'react';
import Devis from './components/Devis';
import LogementArr from './components/Devis/LogementArr';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaBeer } from 'react-icons/fa';
import FormuleChrono from './components/FormuleChrono';
function App() {
 
  return (
    <div className="App">
<Router>
   
    
<Switch>
  <Route exact path="/">
   <div className="navv">

 <h1>Choisissez la formule qui vous convient :</h1> 

<span  className="choix"><Link to="/depart">Formule Zen  </Link></span>
<span  className="choix"><Link to="/chrono">Formule chrono  </Link></span>
</div>


  </Route>
<Route exact path="/depart">
<div className="devis-wrap">
  <Devis/>
      </div>

  
</Route>
<Route exact path="/chrono" component={FormuleChrono}/>




</Switch>


</Router>
    </div>
  );
}

export default App;
/*

   <div className="navv">
  <Devis/>
      </div>


*/