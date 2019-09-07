import React from 'react'
import styled from 'styled-components';

export default function JumpStartBox(props) {
    return (
        <JumpStartWrapper>
            <Value>{props.value}</Value>
            <Title>{props.title}</Title>
        </JumpStartWrapper>
    )
}
const JumpStartWrapper = styled.div`
    width: 250px;
    /* display: flex; */
    height: 100px;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 0.5rem;
    margin: 0 20px;
    padding: 0.5rem 1rem;
`;
const Value = styled.h1`
    color: ${props => props.theme.titleColor};
    font-size: 1.3rem;
`;
const Title = styled.p`
    color: ${props => props.theme.subTitleColor};
    font-size: 0.8rem;
    letter-spacing: 2px;
`;
