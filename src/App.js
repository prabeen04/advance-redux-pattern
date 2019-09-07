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
          <div style={{
            height: '100%', zIndex: 999, display: 'flex',
            justifyContent: 'center', alignItems: 'center'
          }}>

            <JumpStartBox
              value={300}
              title='Goals'
            />
            <JumpStartBox
              value={28}
              title='Wins'
            />
            <JumpStartBox
              value={5}
              title='Loss'
            />

          </div>
        </CurveyBackgroundHeader>
      </ApplicationWrapper>
    </ThemeProvider>
  );
}

export default App;
