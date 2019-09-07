import React, { Fragment } from 'react';
import styled from 'styled-components';
export default function CurveyBackgroundHeader() {
    return (
        <Fragment>
            <Header>
                <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="white" points="0,100 100,0 100,100" />
                </SVG>
            </Header>
        </Fragment>
    )
}
const Header = styled.header`
    position: relative;
    height: 300px;
    background-image: linear-gradient(#304ffe, #6200ea);
`
const SVG = styled.svg`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vw;
`
