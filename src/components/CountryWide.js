import { Cell, Pie, PieChart, ResponsiveContainer, Legend } from 'recharts';
import styled from 'styled-components';
const COLORS = ['#596648', '#B37537', '#EA2E49'];


const CountryDataWrapper = styled.div`
    position: relative;
    margin: 0 0 0 0;
    width: 100%;
    height: auto;
    padding: 50px 25px;
    background-color: #DCE8E6;

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

    ul {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto 0;
        width: 100%;
        max-width: 1500px;
        height: auto;
        padding: 0 0 0 0;
        list-style-type: none;
    }

    li {
        position: relative;
        margin: 0 0 0 0;
        padding: 12px 0 12px 0;
        width: 50%;
        height: auto;
        text-align: center;
    }

    li:first-child,
    li:last-child {
        width: 100%;
    }

    li:last-child {
        padding: 50px 0 12px 0; 
    }

    li span {
        margin: 0 0 0 0;
        display: block;
        font-size: 1.6em;
        line-height: 1.2;
        font-weight: 300;
        text-align: center;
    }

    li span:nth-child(2) {
        font-size: 5em;
        font-weight: 700;
        letter-spacing: -2px;
    }
`

const ChartListItem = styled.li`
    .recharts-default-legend {
        margin: 35px auto 0 !important;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        border: none;
        list-style-type: none;
        width: 100%;
        max-width: 450px;
        height: auto;
    }

    .recharts-default-legend li {
        margin: 0;
        flex-basis: 0;
        flex-grow: 1;
        width: 33.333% !important;
        padding: 0 0 0 0 !important;
    }

    .recharts-default-legend span.recharts-legend-item-text,
    text {
        font-size: 1.5em;
        line-height: 1.2;
        font-weight: 300;
        letter-spacing: 0;
    }
`

function CountryWide(props) {
    const data00 = [
        { name: 'Completed', value: props.countryData < 1 ? 0 : props.countryData.actuals.vaccinationsCompleted },
        { name: 'Initiated', value: props.countryData < 1 ? 0 : props.countryData.actuals.vaccinationsInitiated },
        { name: 'Not Vaccinated', value: props.countryData < 1 ? 0 : props.countryData.population - (props.countryData.actuals.vaccinationsInitiated + props.countryData.actuals.vaccinationsCompleted) }
    ]
    
    return(
        <CountryDataWrapper>
            <h2>National Data</h2>
            { 
                props.countryData < 1 
                ? <h3>Loading...</h3>
                : <ul>
                    <li>
                        <span>Population:</span>
                        <span>{props.countryData.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </li>
                    <li>
                        <span>Total Cases Nationwide:</span>
                        <span>{props.countryData.actuals.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </li>
                    <li>
                        <span>Total Deaths Nationwide:</span>
                        <span>{props.countryData.actuals.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </li>
                    <li>
                        <span>New Cases Nationwide:</span>
                        <span>{props.countryData.actuals.newCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </li>
                    <li>
                        <span>New Deaths Nationwide:</span>
                        <span>{props.countryData.actuals.newDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </li>
                    <li>
                        <span>Number of First Vaccination Doses Given (Pfizer and Moderna):</span>
                        <span>{props.countryData.actuals.vaccinationsInitiated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </li>
                    <li>
                        <span>Number of Vaccines Completed:</span>
                        <span>{props.countryData.actuals.vaccinationsCompleted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </li>
                    <ChartListItem>
                        <ResponsiveContainer  width='100%' height={400}>
                            <PieChart width={800} height={800}>
                                <Pie dataKey="value" data={data00} fill='#EA2E49' cx="50%" cy="50%" outerRadius={150} isAnimationActive={false} label>
                                    { data00.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />) }
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartListItem>
                 </ul>
            }       
        </CountryDataWrapper>
    )
}

export default CountryWide;