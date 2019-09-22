import React from 'react';
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ApplicationWrapper } from "./components/UI/Layout";
import './App.css';
import CurveyBackgroundHeader from './components/UI/Layout/CurveyBackgroundHeader';
import ThemeSwitch from './modules/settings/theme/ThemeSwitch'
import { JumpStartBox } from './components/UI/Elements';
import Navbar from './modules/Nav/Navbar';
import Routes from './modules/Routes/Routes';
function App() {
  const theme = useSelector(({ theme }) => theme.theme)
  return (
    <ThemeProvider theme={theme}>
      <ApplicationWrapper>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Navbar />
          <ThemeSwitch />
        </div>
        <Routes />
      </ApplicationWrapper>
    </ThemeProvider>
  );
}

export default App;
