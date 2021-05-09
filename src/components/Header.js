import styled from 'styled-components';

const HeaderStyles = styled.div`
    position: fixed;
    margin: 0 0 0 0;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    padding: 12px;
    background-color: #292119;
    transition-duration: .5s;
    cursor: pointer;
    z-index: 100;
    &:hover {
        background-color: #EA2E49;
        p {
            color: #F4ABAB;
        }
    }

    p {
        font-size: 1.6em;
        line-height: 1;
        color: white;
        text-align: center;
        text-transform: uppercase;
    }
`

function Header(props) {
    return(
        <HeaderStyles onClick={props.scrollTopClick}>
            <p>Return to Top &#8593;</p>
        </HeaderStyles>
    )
}

export default Header;