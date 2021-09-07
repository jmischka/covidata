
import NationalData from "../components/NationalData";
import NationalMeasure from "../components/NationalMeasure";
import Splash from '../components/Splash';
import styled, { keyframes } from 'styled-components';
import FilterBar from "../components/FilterBar";
import StateData from "../components/StateData";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const HomePageStyles = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  height: auto;
  animation: .5s ${fadeIn} ease-out;
`


function Home(props) {
    return (
        <HomePageStyles>
            <Splash />
            <NationalMeasure usData={props.usData} />
            <NationalData usData={props.usData} />
            <FilterBar />
            <StateData usStateData={props.usStateData} />
        </HomePageStyles>
    )
}

export default Home;