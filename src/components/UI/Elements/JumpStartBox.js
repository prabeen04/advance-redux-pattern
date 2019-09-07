import React from 'react'
import styled from 'styled-components';

export default function JumpStartBox(props) {
    return (
        <JumpStartWrapper>
            {props.children}
        </JumpStartWrapper>
    )
}

const JumpStartWrapper = styled.div`
    width: 250px;
    display: flex;
    height: 100px;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 0.5rem;
    margin: 0 20px;
    padding: 0.5rem;
    color: ${props => props.theme.color}
`;