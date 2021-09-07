import { useEffect } from 'react';
import styled from 'styled-components';
import StateDetailsItem from './StateDetailsItem';

const StateDetailsStyles = styled.div`
    position: relative;
    margin: 0;
    width: 100%;
    height: auto;
    padding: 50px 0;

    h2 {
        margin: 0 0 16px;
        width: 100%;
        height: auto;
        font-size: 4em;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -1px;
        text-align: center;
    }

    ul {
        position: relative;
        margin: 0;
        width: 100%;
        height: auto;
        list-style-type: none;
        padding: 0;
    }
`

function StateDetails(props) {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <StateDetailsStyles>
            <h2>Explore By County</h2>
            { props.stateDetails.isLoading || !props.stateDetails.results.length 
            ? <p>Loading...</p>
            : <ul>
                { props.stateDetails.results.map((state,idx) => <StateDetailsItem key={idx} countyDetails={state} />) }
            </ul>
            }
        </StateDetailsStyles>
    )
}

export default StateDetails;