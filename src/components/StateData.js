import styled from 'styled-components';
import StateDataItem from './StateDataItem';

const StateDataStyles = styled.div`
    position: relative;
    margin: 0;
    width: 100%;
    height: auto;

    div.wrapper {
        margin: 0 auto;
        width: calc((100% / 12) * 10);
        padding: 50px 0;
    }

    ul {
        position: relative;
        margin: 0;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        list-style-type: none;
        justify-content: space-between;
        padding: 0;
    }
`

function StateData(props) {
    // console.log(props)
    return (
        <StateDataStyles>
            <div className="wrapper">
                { props.usStateData.isLoading
                ? <p>Loading...</p>
                : <ul>
                    {props.usStateData.results.map((state,idx) => <StateDataItem key={idx} data={state} />)}
                </ul>
                }
            </div>
        </StateDataStyles>
    )
}

export default StateData;