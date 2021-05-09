import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components'
import './App.css';
import CountryWide from './components/CountryWide';
import Header from './components/Header';
import Splash from './components/Splash';
import StateDetails from './components/StateDetails';
import StateWide from './components/StateWide';
require('dotenv').config()

const usData = `https://api.covidactnow.org/v2/country/US.json?apiKey=${process.env.REACT_APP_COVID_KEY}`;
const usStatesData = `https://api.covidactnow.org/v2/states.json?apiKey=${process.env.REACT_APP_COVID_KEY}`;

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit; 
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 10px;
    padding: 40px 0 0 0;
  }

  p {
    margin: 0 0 0 0;
  }
`

function App() {
  const [initialState, setInitialState] = useState({country: [], initialStates: []});
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState({loaded: false, states: []});
  const [stateSelect, setStateSelect] = useState('Alphabetically');
  const [triggered, setTriggered] = useState(false);
  const [stateDetails, setStateDetails] = useState({loading: false, state: '', data: []});
  
  useEffect(() => {
    Promise.all([
        fetch(usData),
        fetch(usStatesData)
      ]).then(responses => {
            return Promise.all(responses.map(response => {
            return response.json();
      }));
      }).then(data => {
        setCountryData(data[0]);
        setStateData({loaded: false, states: data[1]});
        setInitialState({country: data[0], states: data[1]});
      }).catch(error => {
        console.log(error);
    });
  }, []);

  const handleChange = (e) => {
    setStateSelect(e.target.value);
    setStateData({loaded: true, states: [...stateData.states]});
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (stateSelect === 'Alphabetically') {
      const newState = initialState.states.sort((a,b) => a.state < b.state ? -1 : 1);
      setStateData({loading: false, states: newState});
    } else if (stateSelect === 'Total Cases') {
      const newState = initialState.states.sort((a,b) => a.actuals.cases < b.actuals.cases ? 1 : -1);
      setStateData({loading: false, states: newState});
    } else if (stateSelect === 'Total Deaths') {
      const newState = initialState.states.sort((a,b) => a.actuals.deaths < b.actuals.deaths ? 1 : -1);
      setStateData({loading: false, states: newState});
    } else if (stateSelect === 'Number of First Doses Given') {
      const newState = initialState.states.sort((a,b) => a.actuals.vaccinationsInitiated < b.actuals.vaccinationsInitiated ? 1 : -1);
      setStateData({loading: false, states: newState});
    } else if (stateSelect === 'Vaccinations Completed') {
      const newState = initialState.states.sort((a,b) => a.actuals.vaccinationsCompleted < b.actuals.vaccinationsCompleted ? 1 : -1);
      setStateData({loading: false, states: newState});
    } else {
      const newState = initialState.states.sort((a,b) => a.metrics.vaccinationsCompletedRatio < b.metrics.vaccinationsCompletedRatio ? 1 : -1);
      setStateData({loading: false, states: newState});
    }
  }

  const handleStateClick = (e) => {
    let state = e.target.parentElement.id
    setStateDetails({loading: true, stateTitle: state, data:[]});
    fetch(`https://api.covidactnow.org/v2/county/${state}.json?apiKey=2da0a1609c10427689d089e1240087fa`)
      .then(response => response.json())
      .then(data => setStateDetails({
        loading: false,
        state: state,
        data: data
      }));
    setTriggered(!triggered);
  }

  const closeTrigger = (e) => {
    setTriggered(!triggered);
  }

  const scrollTopClick = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header scrollTopClick={scrollTopClick} />
      <Splash />
      <CountryWide countryData={countryData} />
      <StateWide stateSelect={stateSelect} handleChange={handleChange} handleClick={handleClick} stateData={stateData} handleStateClick={handleStateClick} />
      <StateDetails stateDetails={stateDetails} triggered={triggered} closeTrigger={closeTrigger} />
    </div>
  );
}

export default App;
