import styled from 'styled-components';
const options = ['Alphabetically', 'Total Cases', 'Total Deaths', 'Number of First Doses Given', 'Vaccinations Completed', 'Vaccinations Completed (Percentage)'];

const StyleSortContainer = styled.div`
    position: relative;
    margin: 0 0 25px;
    width: 100%;
    height: auto;
`

const FormWrapper = styled.form`
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1500px;
    text-align: center;
    padding 16px;
    border-bottom: 1px dotted black;

    label {
        display: inline-block;
        margin: 0;
        font-size: 1.4em;
        font-weight: 500;
        line-height: 1;
        color: #3B3C40;
    }

    select {
        display: inline-block;
        margin: 0 12px;
        font-size: 1.5em;
        font-weight: 500;
        line-height: 1;
        padding: 3px;
        color: #3B3C40;
    }

    option {
        font-size: 1.5em;
        font-weight: 500;
        line-height: 1;
        color: #3B3C40; 
    }

    button {
        display: inline-block;
        margin: 0;
        font-size: 1.5em;
        font-weight: 500;
        line-height: 1;
        background-color: #EA2E49;
        padding: 6px 9px;
        outline: none;
        border: none;
        color: white;
        cursor: pointer;
        transition-duration: .3s; 
        border-radius: 4px;
        &:hover {
            background-color: #18759E;
        }
    }
`

function StateSort(props) {
    return (
        <StyleSortContainer>
            <FormWrapper onSubmit={props.handleClick}>
                <label htmlFor='state-sort'>Sort By:</label>
                <select name='state-sort' id='state-sort' value={props.stateSelect} onChange={props.handleChange}>
                    {options.map((option,index) => <option key={index} value={option}>{option}</option>)}
                </select>
                <button type="submit">Sort States</button>
            </FormWrapper>
        </StyleSortContainer>
    )
}

export default StateSort;