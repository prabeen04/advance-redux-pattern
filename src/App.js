import React from 'react';
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ApplicationWrapper } from "./components/UI/Layout";
import './App.css';
import CurveyBackgroundHeader from './components/UI/Layout/CurveyBackgroundHeader';

function App() {
  const theme = useSelector(({ theme }) => theme.theme)
  return (
    <ThemeProvider theme={theme}>
      <ApplicationWrapper>
        <CurveyBackgroundHeader/>
      </ApplicationWrapper>
    </ThemeProvider>
  );
}

export default App;
