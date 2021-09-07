import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useFetch from './utils/useFetch';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import StatePage from "./pages/StatePage";
require('dotenv').config()

const usDataURL = `https://api.covidactnow.org/v2/country/US.json?apiKey=${process.env.REACT_APP_COVID_KEY}`;
const usStatesDataURL = `https://api.covidactnow.org/v2/states.json?apiKey=${process.env.REACT_APP_COVID_KEY}`;

function App() {
  const { data: usData } = useFetch(usDataURL);
  const { data: usStateData } = useFetch(usStatesDataURL);
  
  return (
    <Router>
      <div className="App">     
          <Header />
          <Switch>
            <Route exact path="/">
                <Home usStateData={usStateData} usData={usData.results} />
            </Route>
            <Route path="/:state">
                <StatePage usStateData={usStateData.results} />
            </Route> 
          </Switch>    
      </div>
    </Router>
  );
}

export default App;
