import styled from 'styled-components';

const ListStyles = styled.li`
    position: relative;
    margin: 0;
    width: 100%;
    height: auto;
    padding: 16px 0;
    border-bottom: 1px dotted #DCE8E6;

    ul {
        position: relative;
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        width: 100:
        height: auto;
        list-style-type: none;

        li {
            position: relative;
            margin: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            flex-basis: 0;
            flex-grow: 1;
            justify-content: center;
            padding: 0;
            font-size: 2.4em;
            font-weight: 400;
            line-height: 1;
            color: #DCE8E6; 
            
            span {
                display: block;
                margin: 0;
                width: 100%;
                height: auto;
                font-size: .5em;
                font-weight: 400;
                line-height: 1;
                color: #DCE8E6; 
                text-transform: uppercase;
                text-align: center;
            }
            
            &:nth-child(1) {
                justify-content: flex-start;
            }
        }
    }
`

function DetailListItem(props) {
    return (
        <ListStyles>
            <ul>
                <li>{props.county.county}</li>
                <li><span>Total Cases:</span>{props.county.actuals.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
                <li><span>Total Deaths:</span>{props.county.actuals.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
                <li><span>Vaccination Initiated:</span>{Math.round(props.county.metrics.vaccinationsInitiatedRatio * 100) + '%'}</li>
                <li><span>Vaccination Completed:</span>{Math.round(props.county.metrics.vaccinationsCompletedRatio * 100) + '%'}</li>
                <li><span>Risk Level:</span>{props.county.riskLevels.overall}</li>
            </ul>
        </ListStyles>
    )
}

export default DetailListItem;