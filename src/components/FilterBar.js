import styled from 'styled-components';

const FilterBarStyles = styled.div`
    position: relative;
    margin: 0;
    padding: 25px 0;
    background-color: #EBEDEC;

    div.wrapper {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        margin: 0 auto;
        width: calc((100% / 12) * 10);

        input {
            position: relative;
            display: inline-block;
            width: calc((100% / 12) * 5);
            height: 36px;
            padding: 12px;
            font-size: 1.4em;
            appearance: none;
            border: 1px solid #BED4CF;
        }
    }
`

function FilterBar(props) {
    return (
        <FilterBarStyles>
            <div className="wrapper">
                <input type="text" id="search" name="search" placeholder="Search for your state" />
            </div>
        </FilterBarStyles>
    )
}

export default FilterBar;