import { Link } from "react-router-dom";
import styled from 'styled-components';

const HeaderStyles = styled.header`
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
        a {
            color: #F4ABAB;
        }
    }

    a {
        display: block;
        font-size: 1.6em;
        font-weight: 700;
        line-height: 1;
        color: white;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
    }
`

function Header(props) {
    return(
        <HeaderStyles>
            <Link to="/">COVIDATA</Link>
        </HeaderStyles>
    )
}

export default Header;