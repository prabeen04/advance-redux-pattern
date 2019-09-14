import React from 'react'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import styled from 'styled-components';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
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
                <ChartContainer>
                    <LineChart width={100} data={data}>
                        <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={1} />
                        <Tooltip />
                    </LineChart>
                </ChartContainer>
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
    flex-direction:column;
    z-index: inherit;
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

const ChartContainer = styled(ResponsiveContainer)`
    margin-left: 1.5rem;
`;