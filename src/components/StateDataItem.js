import { Link } from "react-router-dom";
import styled from 'styled-components';
import StateFinder from '../utils/StateFinder';

const StateDataItemStyles = styled.li`
    position: relative;
    margin: 12px 0;
    width: 24%;
    height: auto;

    a {
        position: relative;
        display: block;
        margin: 0;
        width: 100%;
        height: auto;
        padding: 30px 12px 12px;
        text-decoration: none;
        background-color: white;
        border: 1px solid #DCE8E6;
        transition-duration: .5s;
        &:hover {
            border: 1px solid #BED4CF;
            transform: translateY(-6px);
            box-shadow: 3px 6px 6px rgba(0,0,0,.07);
        }

        div.measure {
            position: absolute;
            margin: 0;
            left: 0;
            top: 0;
            width: 100%;
            height: 8px;
        }

        div.veryLow {
            background-color: #14C5D9;
        }

        div.low {
            background-color: #50BF77;
        }

        div.moderate {
            background-color: #F2C029;
        }

        div.high {
            background-color: #F25764;
        }

        div.veryHigh {
            background-color: #F25764;
        }

        h3 {
            margin: 0 0 3px;
            font-size: 2em;
            font-weight: 700;
            line-height: 1;
            color: black;
            text-align: center;
            color: #292119;
        }

        span {
            display: block;
            margin: 0;
            width: 100%;
            font-size: 1.4em;
            font-weight: 300;
            line-height: 1.25;
            text-transform: uppercase;
            text-align: center;
            color: #292119;

            span {
                display: inline;
                margin: 0;
                font-weight: 700;
                font-size: 1em;
            }
        }

        div.wrapper {
            margin: 12px 0 0;
            width: 100%;
            height: auto;
            padding: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            div {
                margin: 0;
                width: 50%;
                height: auto;
                padding: 0;

                span {
                    display: block;
                    margin: 0;
                    font-size: 1.2em;
                    font-weight: 300;
                    line-height: 1.2;
                    text-transform: uppercase;
                    text-align: center;
                }

                p {
                    margin: 0;
                    font-size: 2em;
                    font-weight: 700;
                    line-height: 1.3;
                    text-align: center;
                    color: black;
                }
            }
        }
    }
`

function StateDataItem(props) {
    return (
        <StateDataItemStyles>
            <Link to={`/${props.data.state}`}>
                    { props.data.riskLevels.overall === 1 ? <div className="measure veryLow"></div>
                    : props.data.riskLevels.overall === 2 ? <div className="measure low"></div>
                    : props.data.riskLevels.overall === 3 ? <div className="measure moderate"></div>
                    : props.data.riskLevels.overall === 4 ? <div className="measure high"></div>
                    : <div className="measure veryHigh"></div>
                    }
                <h3>{StateFinder(props.data.state)}</h3>
                <span>Risk Level:
                    { props.data.riskLevels.overall === 1 ? <span>Very Low</span>
                    : props.data.riskLevels.overall === 2 ? <span>Low</span>
                    : props.data.riskLevels.overall === 3 ? <span>Moderate</span>
                    : props.data.riskLevels.overall === 4 ? <span>High</span>
                    : <span>Very High</span>
                    }
                </span>
                <span>Population: <span>{props.data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></span>
                <div className="wrapper">
                    <div>
                        <span>Total New Cases:</span>
                        <p>{props.data.actuals.newCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>
                    <div>
                        <span>Positive Test Rate:</span>
                        <p>{`${(props.data.metrics.testPositivityRatio * 100).toFixed(1)}%`}</p>
                    </div>
                </div>
            </Link>
        </StateDataItemStyles>
    )
}

export default StateDataItem;