import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';
import StateFinder from '../utils/StateFinder';

const COLORS = ['#5BA66A', '#CC9629', '#EA2E49'];

const StateStyles = styled.li`
    postion: relative;
    margin: 0 0 0 0;
    width: 25%;
    padding: 12px 12px 12px 12px;

    ul {
        position: relative;
        margin: 0;
        display: flex;
        flex-dirction: row;
        flex-wrap: wrap;
        width: 100%;
        height: auto;
        padding: 12px;
        border: 1px dotted black;
        background-color: white;
        list-style-type: none;
        cursor: pointer;
        transition-duration: .5s;
        &:hover {
            box-shadow: 0 10px 25px rgba(0,0,0,.3);
        }

        li {
            position: relative;
            margin: 0 0 6px;
            width: 100%;
            height: auto;
            padding: 0;
            &:nth-child(5),
            &:nth-child(6),
            &:nth-child(8),
            &:nth-child(9) {
                margin: 0 0 12px;
                width: 50%;
            }
            &:nth-child(8) p {
                color: #5BA66A;
            }
            &:nth-child(9) p {
                color: #EA2E49;
            }
        }

        span.wrapper {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }
    
    h3 {
        margin: 0;
        font-size: 2.3em;
        font-weight: 700;
        line-height: 1;
        padding: 3px 3px 5px;
        text-transform: none;
        text-align: center;
        background-color: #EBEDEC;
    }

    span {
        margin: 0 0 0 0;
        display: block;
        font-size: 1.1em;
        line-height: 1.2;
        font-weight: 300;
        text-transform: uppercase;
        text-align: center;
    }

    p {
        margin: 0;
        font-size: 2.2em;
        font-weight: 700;
        line-height: 1;
        width: 100%
        height: auto;
        text-align: center;
    }

    .recharts-pie-labels {
        font-size: 1.3em;
    }

    .recharts-default-legend {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        border: none;
    }
`

function State(props) {
    const data01 = [
        { name: 'Completed', value: props.data.actuals.vaccinationsCompleted === null ? 0 : props.data.actuals.vaccinationsCompleted },
        { name: 'Initiated', value: props.data.actuals.vaccinationsInitiated === null ? 0 : props.data.actuals.vaccinationsInitiated },
        { name: 'Not Vaccinated', value: props.data.population - (props.data.actuals.vaccinationsInitiated + props.data.actuals.vaccinationsCompleted) }
    ]
    
    return (
        <StateStyles onClick={props.handleStateClick}>
            <ul id={props.data.state}>
                <li>
                    <h3>{StateFinder(props.data.state)}</h3>
                </li>
                <li>
                    <span>Population:</span>
                    <p>{props.data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
                <li>
                    <span>Total Cases:</span>
                    <p>{props.data.actuals.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
                <li>
                    <span>Total Deaths:</span>
                    <p>{props.data.actuals.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
                <li>
                    <span>Vaccines Innitiated:</span>
                    <p>{props.data.actuals.vaccinationsInitiated === null ? 0 : props.data.actuals.vaccinationsInitiated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
                <li>
                    <span>Vaccines Completed:</span>
                    <p>{ props.data.actuals.vaccinationsCompleted === null ? 0 : props.data.actuals.vaccinationsCompleted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
                <li> 
                    <ResponsiveContainer width='100%' height={290}> 
                        <PieChart width={300} height={300}>
                            <Pie dataKey="value" data={data01} fill='#EA2E49' cx="50%" cy="50%" outerRadius={80} isAnimationActive={false} label>
                                { data01.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />) }
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </li>
                <li>
                    <span>Percentage Partially or Fully Vaccinated:</span>
                    <p>{ Math.round((props.data.actuals.vaccinationsInitiated + props.data.actuals.vaccinationsCompleted) / props.data.population * 100) + '%' }</p>
                </li>
                <li>
                    <span>Percentage Not Vaccinated:</span>
                    <p>{ 100 - Math.round((props.data.actuals.vaccinationsInitiated + props.data.actuals.vaccinationsCompleted) / props.data.population * 100) + '%' }</p>
                </li>
                <span className="wrapper"></span>
            </ul>
        </StateStyles>
    )
}

export default State;