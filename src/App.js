import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Youtube from './components/Youtube';
function App() {
 
  return (
    <div className="App">
<Router>
   
    
<Switch>
  <Route exact path="/">
  
<Youtube/>
  </Route>







</Switch>


</Router>
    </div>
  );
}

export default App;
