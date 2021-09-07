import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import styled, { keyframes } from 'styled-components';
import StateTitle from "../components/StateTitle";
import StateDetails from "../components/StateDetails";
require('dotenv').config()

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StatePageStyles = styled.div`
    position: relative;
    margin: 0;
    width: 100%;
    height: auto;
    animation: .5s ${fadeIn} ease-out;
`
  
function StatePage(props) {
    let location = useParams();
    const { data: stateDetails } = useFetch(`https://api.covidactnow.org/v2/county/${location.state}.json?apiKey=${process.env.REACT_APP_COVID_KEY}`);
    let overall = props.usStateData.filter(state => state.state === location.state);
    return (
        <StatePageStyles>
            <StateTitle stateDetails={stateDetails.results} statePageTitle={location.state} overall={overall} />
            <StateDetails stateDetails={stateDetails} />
        </StatePageStyles>
    )
}

export default StatePage;