import styled from 'styled-components';
import State from './State';
import StateSort from './StateSort';


const StateDataWrapper = styled.div`
    position: relative;
    margin: 0 0 0 0;
    width: 100%;
    height: auto;
    padding: 50px 25px 25px;

    h2 {
        margin: 0 0 0 0;
        font-size: 6em;
        line-height: 1;
        text-align: center;
        letter-spacing: -1px;
    }

    h2:after {
        content: "";
        display: block;
        margin: 12px auto 25px;
        width: 50px;
        border-bottom: 2px dotted #737373;
    }

    h3 {
        margin: 0 0 12px 0;
        font-size: 2.3em;
        font-weight: 700;
        line-height: 1;
        padding: 3px 3px 5px;
        text-transform: none;
        background-color: #EBEDEC;
    }

    ul {
        position: relative;
        margin: 0 auto 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1524px;
        height: auto;
        padding: 0 0 0 0;
        list-style-type: none;
    }
`

function StateWide(props) {
    return(
        <StateDataWrapper>
            <h2>State Data</h2>
            <StateSort stateSelect={props.stateSelect} handleChange={props.handleChange} handleClick={props.handleClick} />
            { props.stateData.states < 1 ? <h3>Loading...</h3> : <ul>{props.stateData.states.map((state,index) => <State key={index} data={state} handleStateClick={props.handleStateClick} />)} </ul>}
        </StateDataWrapper>
    )
}

export default StateWide;