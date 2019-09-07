import React from 'react';
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ApplicationWrapper } from "./components/UI/Layout";
import './App.css';
import CurveyBackgroundHeader from './components/UI/Layout/CurveyBackgroundHeader';
import ThemeSwitch from './modules/settings/theme/ThemeSwitch'
import { JumpStartBox } from './components/UI/Elements';
function App() {
  const theme = useSelector(({ theme }) => theme.theme)
  return (
    <ThemeProvider theme={theme}>
      <ApplicationWrapper>
        <CurveyBackgroundHeader>
          <div style={{ float: 'right' }}>
            <ThemeSwitch />
          </div>
          <JumpStartBox>
            <h3>BOX 1</h3>
          </JumpStartBox>
          <JumpStartBox>
            <h3>BOX 1</h3>
          </JumpStartBox>
          <JumpStartBox>
            <h3>BOX 1</h3>
          </JumpStartBox>
        </CurveyBackgroundHeader>
      </ApplicationWrapper>
    </ThemeProvider>
  );
}

export default App;
