import styled from 'styled-components';

const SplashStyles = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    margin: 0;
    width: 100%;
    height: 85vh;
    background-color: #292119;

    p {
        display: block;
        margin: 0;
        font-size: 3em;
        font-weight: 400;
        line-height: 1;
        color: #EBEDEC;
        text-align: center;
        width: 100%;
        align-self: flex-start;

        span {
            color: #EA2E49; 
        }
    }

    p.tagline {
        font-size: 1.6em;
        font-weight: 400;
        width: 100%; 
    }
`

const SplashText = styled.span`
    position: relative;
    display: inline-block;
    width: 50%;
    font-size: 25em;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -8px;
    &:nth-child(1) {
        color: #DCE8E6;
        text-align: right;
        transform: translateX(10px);
    }
    &:nth-child(2) {
        color: #EA2E49;
        text-align: left;
        transform: translateX(-10px);
    }

    @media screen and (max-width: 1240px) {
        font-size: 20em;
    }

    @media screen and (max-width: 1024px) {
        font-size: 15em;
        &:nth-child(1) {
            transform: translateX(5px);
        }
        &:nth-child(2) {
            transform: translateX(-5px);
        }
    }
    
    @media screen and (max-width: 767px) {
        font-size: 8em;
        letter-spacing: -3px;
        &:nth-child(1) {
            transform: translateX(3px);
        }
        &:nth-child(2) {
            transform: translateX(-3px);
        }
    }
`

function Splash() {
    return (
        <SplashStyles>
            <SplashText>COVI</SplashText>
            <SplashText>DATA</SplashText>
            <p>Deciding where to go this summer? COVIDATA tracks <span>COVID-19</span> numbers in The United States</p>
            <p className="tagline">COVIDATA uses data from Covid Act Now, an independent nonprofit founded by volunteers in March 2020.</p>
        </SplashStyles>
    )
}

export default Splash;