import styled from 'styled-components';
import StateFinder from '../utils/StateFinder';
import DetailListItem from './DetailListItem';

const StateDetailStyles = styled.div`
    position: fixed;
    left: 0;
    top: 100%;
    width: 100%;
    height: 100vh;
    background-color: #292119;
    z-index: 100;
    opacity: 0;
    transition-duration: .7s;
    &.triggered {
        top: 0;
        opacity: 1
    }

    .county-window {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .county-wrapper {
        position: relative;
        margin: 0;
        width: 100%;
        height: auto;
        padding: 75px 25px 50px;
    }

    h1 {
        margin: 0;
        font-size: 16em;
        font-weight: 800;
        letter-spacing: -3px;
    }

    h2 {
        margin: 100px 0 0;
        font-size: 4em;
        font-weight: 400;
    }

    h1,h2 {
        line-height: 1;
        color: #DCE8E6;
        text-align: center;
    } 
    
    ul {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 25px 0 0;
        width: 100%;
        height: auto;
        padding: 0;
        list-style-type: none;
    }

    span {
        display: block;
        margin: 25px 0 0 0;
        font-size: 3em;
        color: #DCE8E6;
    }
`

const CloseTriggerStyles = styled.div`
    position: relative;
    margin: 0 0 0 0;
    width: 100%;
    height: auto;
    padding: 12px;
    background-color: #EA2E49;
    transition-duration: .5s;
    cursor: pointer;
    z-index: 10;
    &:hover {
        background-color: #18759E;
    }

    p {
        font-size: 1.6em;
        line-height: 1;
        color: white;
        text-align: center;
        text-transform: uppercase;
    }
`

function StateDetails(props) {
    return (
        <StateDetailStyles className={(!props.triggered) ? null : 'triggered'}>
            <CloseTriggerStyles onClick={props.closeTrigger}>
                <p>Close State Details &#8595;</p>
            </CloseTriggerStyles>
            <div className="county-window">
                <div className="county-wrapper">
                    <h1>{StateFinder(props.stateDetails.state)}</h1>
                    <h2>Counties</h2>
                    { props.stateDetails.data.length < 1 
                    ? <span>Loading...</span> 
                    : <ul>{props.stateDetails.data.map((county,index) => <DetailListItem key={index} county={county} />)}</ul>
                    }
                </div>
            </div>
        </StateDetailStyles>
    )
}

export default StateDetails;