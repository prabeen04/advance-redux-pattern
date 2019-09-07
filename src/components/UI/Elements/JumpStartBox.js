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
    background-color: #fff;
    border-radius: 0.3rem;
`;