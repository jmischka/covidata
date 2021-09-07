import styled from 'styled-components';

const RiskLevelStyles = styled.div`
    margin: 0 auto;
    width: calc((100% / 12) * 10);
    padding: 50px 0;
    color: #292119;

    div {
        margin: 0 auto 25px;
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

    span {
        display: block;
        margin: 0;
        text-align: center;
        font-size: 1.4em;
        font-weight: 300;
        line-height: 1;
        text-transform: uppercase;
        color: #292119;
    }

    h2 {
        margin: 0;
        text-align: center;
        font-size: 3em;
        font-weight: 400;
        line-height: 1.3;
        color: #292119;

        span {
            display: inline;
            font-size: 1em;
            font-weight: 700; 
            text-transform: none;
            color: #292119;
        }
    }
`

function NationalMeasure(props) {
    if (!props.usData.riskLevels) {
        return (
            <div>
                <RiskLevelStyles>
                    <span>National Risk Level:</span>
                    <h2>Loading...</h2>
                </RiskLevelStyles>
            </div>
        )
    } else if (props.usData.riskLevels.overall === 1) {
        return (
            <div>
                <RiskLevelStyles>
                    <div className="very-low"></div>
                    <span>National Risk Level:</span>
                    <h2><span>Very Low.</span> Life is pretty much back to normal</h2>
                </RiskLevelStyles>
            </div>
        )
    } else if (props.usData.riskLevels.overall === 2) {
        return (
            <div>
                <RiskLevelStyles>
                    <div className="low"></div>
                    <span>National Risk Level:</span>
                    <h2><span>Low.</span> Be cautioius and wear a mask when traveling.</h2>
                </RiskLevelStyles>
            </div>
        )
    } else if (props.usData.riskLevels.overall === 3) {
        return (
            <div>
                <RiskLevelStyles>
                    <div className="moderate"></div>
                    <span>National Risk Level:</span>
                    <h2><span>Moderate.</span> Wear a mask inside and in densly populated areas.</h2>
                </RiskLevelStyles>
            </div>
        ) 
    } else if (props.usData.riskLevels.overall === 4) {
        return (
            <div>
                <RiskLevelStyles>
                    <div className="high"></div>
                    <span>National Risk Level:</span>
                    <h2><span>High.</span> Somewhat dangerous and you must wear a mask in populated areas.</h2>
                </RiskLevelStyles>
            </div>
        )
    } else {
        return (
            <div>
                <RiskLevelStyles>
                    <div className="very-high"></div>
                    <span>National Risk Level:</span>
                    <h2><span>Very High.</span> Dangerous and You must wear a mask at all times.</h2>
                </RiskLevelStyles>
            </div>
        ) 
    }
}

export default NationalMeasure;