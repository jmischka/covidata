import styled from 'styled-components';

const NationalDataStyles = styled.div`
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: calc((100% / 12) * 10);
    height: auto;
    padding: 50px 0;
    color: #292119;

    div {
        margin: 0;
        width: 33.333%;
        height: auto;

        span {
            display: block;
            margin: 0;
            text-align: center;
            font-size: 1.4em;
            font-weight: 300;
            line-height: 1;
            text-transform: uppercase;
            
            span {
                display: inline;
                font-size: 1em;
                font-weight: 700;
                color: #292119;
            }
        }
    
        h2 {
            margin: 0 0 50px;
            font-size: 4em;
            font-weight: 700;
            line-height: 1.3;
            text-align: center;
            letter-spacing: -2px;
            color: #292119;
        }

        &:nth-child(1) {
            border-right: 1px dotted black;
        }

        &:nth-child(2) {
            border-right: 1px dotted black;  
        }
    }
`

function NationalData(props) {
    return (
        <NationalDataStyles>
            <div>
                <span>National Percentage with <span>1+ vaccination dose:</span></span>
                {!props.usData.metrics
                ? <p>Loading...</p>
                : <h2>{`${props.usData.metrics.vaccinationsInitiatedRatio * 100}%`}</h2>
                }
            </div>
            <div>
                <span>National Percentage <span>fully vaccinated:</span></span>
                {!props.usData.metrics
                ? <p>Loading...</p>
                : <h2>{`${props.usData.metrics.vaccinationsCompletedRatio * 100}%`}</h2>
                }
            </div>
            <div>
                <span>Number of new cases (nationally):</span>
                {!props.usData.actuals
                ? <p>Loading...</p>
                : <h2>{props.usData.actuals.newCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                }

                <span>Number of new deaths (nationally):</span>
                {!props.usData.actuals
                ? <p>Loading...</p>
                : <h2>{props.usData.actuals.newDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                }

                <span>Infection Rate (nationally):</span>
                {!props.usData.metrics
                ? <p>Loading...</p>
                : <h2>{props.usData.metrics.infectionRate}</h2>
                }
            </div>
        </NationalDataStyles>
    )
}

export default NationalData;
