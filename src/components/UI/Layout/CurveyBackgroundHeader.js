import React, { Fragment } from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
export default function CurveyBackgroundHeader(props) {
    const theme = useSelector(state => state.theme.theme)
    return (
        <Fragment>
            <Header>
                <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill={theme.applicationBackground} points="0,100 100,0 100,100" />
                </SVG>
                {props.children}
            </Header>
        </Fragment>
    )
}
const Header = styled.header`
    position: relative;
    height: 300px;
    background-image: linear-gradient(#42a5f5 , #311b92);
    border-radius: 0px 0px 100px 14px;
`
const SVG = styled.svg`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
`
