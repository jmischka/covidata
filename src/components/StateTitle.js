import styled from 'styled-components';
import StateFinder from '../utils/StateFinder';

const StateTitleStyles = styled.div`
    position: relative;
    margin: 0;
    width: 100%;
    height: 85vh;
    background-color: #292119;

    div.wrapper {
        position: absolute;
        margin: 0;
        width: 100%;
        left: 0;
        top: 45%;
        transform: translateY(-50%);
    }

    h1,p { 
        font-weight: 700;
        color: white;      
    }

    h1 {
        margin: 0 0 50px;
        font-size: 15em;
        letter-spacing: -2px;
        text-align: center;
    }

    p {
        font-size: 3em;
        text-align: center;

        span {
            display: inline;
            font-size: 1em;
            font-weight: 300;
            text-transform: none;
        }
    }

    span {
        display: block;
        margin: 0 0 6px;
        font-size: 1.4em;
        font-weight: 300;
        line-height: 1;
        text-transform: uppercase;
        text-align: center;
        color: white;
    }

    div.measure {
        margin: 0 auto 35px;
        width: calc((100% / 12) * 4);
        height: 36px;
        border-radius: 18px;
    }

    div.very-low {
        background: #14c5d9; /* Old browsers */
        background: -moz-linear-gradient(left,  #14c5d9 0%, #50bf77 60%, #50bf77 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left,  #14c5d9 0%,#50bf77 60%,#50bf77 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right,  #14c5d9 0%,#50bf77 60%,#50bf77 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#14c5d9', endColorstr='#50bf77',GradientType=1 ); /* IE6-9 */
    }

    div.low {
        background: #50bf77; /* Old browsers */
        background: -moz-linear-gradient(left,  #50bf77 0%, #f2c029 60%, #f2c029 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left,  #50bf77 0%,#f2c029 60%,#f2c029 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right,  #50bf77 0%,#f2c029 60%,#f2c029 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#50bf77', endColorstr='#f2c029',GradientType=1 ); /* IE6-9 */
    }

    div.moderate {
        background: #50bf77; /* Old browsers */
        background: -moz-linear-gradient(left,  #50bf77 0%, #f2c029 30%, #f27c38 60%, #f27c38 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left,  #50bf77 0%,#f2c029 30%,#f27c38 60%,#f27c38 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right,  #50bf77 0%,#f2c029 30%,#f27c38 60%,#f27c38 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#50bf77', endColorstr='#f27c38',GradientType=1 ); /* IE6-9 */
    }

    div.high {
        background: #f2c029; /* Old browsers */
        background: -moz-linear-gradient(left,  #f2c029 0%, #f27c38 30%, #f25764 60%, #f25764 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left,  #f2c029 0%,#f27c38 30%,#f25764 60%,#f25764 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right,  #f2c029 0%,#f27c38 30%,#f25764 60%,#f25764 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2c029', endColorstr='#f25764',GradientType=1 ); /* IE6-9 */
    }

    div.very-high {
        background: #f27c38; /* Old browsers */
        background: -moz-linear-gradient(left,  #f27c38 0%, #f25764 30%, #b3404a 60%, #73292f 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left,  #f27c38 0%,#f25764 30%,#b3404a 60%,#73292f 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right,  #f27c38 0%,#f25764 30%,#b3404a 60%,#73292f 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f27c38', endColorstr='#73292f',GradientType=1 ); /* IE6-9 */
    }
`

function StateTitle(props) {
    if (!props.stateDetails || !props.overall) {
        return (
            <StateTitleStyles>
                <div className="wrapper">
                    <p>This state page does not exist</p>
                </div>
            </StateTitleStyles>
        )
    } else {
        return (
            <StateTitleStyles>
                <div className="wrapper">
                    <h1>{StateFinder(props.statePageTitle)}</h1>
                    { props.overall[0].riskLevels.overall === 1 ? <div className="measure very-low"></div>
                    : props.overall[0].riskLevels.overall === 2 ? <div className="measure low"></div>
                    : props.overall[0].riskLevels.overall === 3 ? <div className="measure moderate"></div>
                    : props.overall[0].riskLevels.overall === 4 ? <div className="measure high"></div>
                    : <div className="measure very-high"></div>
                    }
                    <span>Current Risk Level:</span>
                    { props.overall[0].riskLevels.overall === 1 ? <p>Very Low. <span>Life is pretty much back to normal.</span></p>
                    : props.overall[0].riskLevels.overall === 2 ? <p>Low. <span>Be cautious and wear a mask in airports and when traveling.</span></p>
                    : props.overall[0].riskLevels.overall === 3 ? <p>Moderate. <span>Wear a mask in densly populated areas.</span></p>
                    : props.overall[0].riskLevels.overall === 4 ? <p>High. <span>You must wear a mask when socializing and in populated areas.</span></p>
                    : <p>Very High. <span>You must wear a mask at all times.</span></p>
                    }
                </div>
            </StateTitleStyles>
        )
    }
}

export default StateTitle;