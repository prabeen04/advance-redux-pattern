import React from 'react'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import styled from 'styled-components';
export default function JumpStartBox(props) {
    return (
        <JumpStartWrapper>
            <Value>{props.value}</Value>
            <Title>{props.title}</Title>
            <Container>
                <Progress down={false}>
                    {
                        false
                            ? <ProgressDown fontSize='small' />
                            : <ProgressUp fontSize='small' />
                    }
                    0.37
                </Progress>
            </Container>
        </JumpStartWrapper>
    )
}
const JumpStartWrapper = styled.div`
    width: 250px;
    height: 100px;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 0.5rem;
    margin: 0 20px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;
const Value = styled.h1`
    color: ${props => props.theme.titleColor};
    font-size: 1.3rem;
`;
const Title = styled.p`
    color: ${props => props.theme.subTitleColor};
    font-size: 0.8rem;
    margin: 0.3rem 0;
    letter-spacing: 2px;
`;
const Progress = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.down ? props.theme.red : props.theme.lightGreen};
`;
const ProgressDown = styled(ArrowDownward)`
    color: ${props => props.theme.red};
`
const ProgressUp = styled(ArrowUpward)`
    color: ${props => props.theme.lightGreen};
`
const Container = styled.div`
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;