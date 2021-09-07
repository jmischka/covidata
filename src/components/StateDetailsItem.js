import styled from 'styled-components';

const StateDetailsItemStyles = styled.li`
    position: relative;
    margin: 0;
    width: 100%;
    height: auto;
    padding: 25px;
    border-bottom: 1px dotted black;
    &:last-child {
        border-bottom: none;
    }

    ul {
        position: relative;
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: auto;
        padding: 0;
        list-style-type: none;

        li {
            display: relative;
            margin: 0;
            width: 20%;
            height: auto;
            padding: 0 25px 0 0;
            &:first-child {
                margin: 0 0 16px;
                width: 100%;
                text-align: center;
            }
        }

        span {
            display: block;
            margin: 0 0 3px;
            font-size: 1.2em;
            font-weight: 300;
            line-height: 1;
            text-align: center;
            text-transform: uppercase;
        }

        p {
            margin: 0;
            font-size: 1.8em;
            font-weight: 600;
            line-height: 1;
            text-align: center;
        }
    }

    h3 {
        margin: 0;
        font-size: 2.3em;
        font-weight: 700;
        line-height: 1;
        width: 100%;
    }
`

function StateDetailsItem(props) {
    console.log(props);
    return (
        <StateDetailsItemStyles>
            <ul>
                <li><h3>{props.countyDetails.county}</h3></li>
                <li><span>Cases:</span><p>{props.countyDetails.actuals.cases}</p></li>
                <li><span>Deaths:</span><p>{props.countyDetails.actuals.deaths}</p></li>
                <li><span>Vaccinations Completed:</span><p>{`${(props.countyDetails.metrics.vaccinationsCompletedRatio * 100).toFixed(1)}%`}</p></li>
                <li><span>Positivity Rate:</span><p>{`${(props.countyDetails.metrics.testPositivityRatio * 100).toFixed(1)}%`}</p></li>
                <li><span>Risk Level:</span><p>{props.countyDetails.riskLevels.overall}</p></li>
            </ul>
        </StateDetailsItemStyles>
    )
}

export default StateDetailsItem;