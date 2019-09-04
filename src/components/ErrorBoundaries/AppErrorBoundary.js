import React from 'react';
import { sentry } from '../../config/Sentry/Sentry';
import styled from 'styled-components';

const EBContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    h1{
        color: #222;
        font-size: 1.3rem;
        font-weight: 600;
    }
`
class AppErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        sentry.logToSentry(error)
        //   logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <EBContainer>
                    <h1>Something went wrong.</h1>
                </EBContainer>
            )
        }

        return this.props.children;
    }
}
export default AppErrorBoundary;
