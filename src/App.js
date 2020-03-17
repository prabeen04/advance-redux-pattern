import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ApplicationWrapper } from './components/UI/Layout';
import CurveyBackgroundHeader from './components/UI/Layout/CurveyBackgroundHeader';
import ThemeSwitch from './modules/settings/theme/ThemeSwitch';
import { JumpStartBox } from './components/UI/Elements';
import './App.css';

export default function App() {
  const theme = useSelector(({ theme }) => theme.theme);
  return (
    <ThemeProvider theme={theme}>
      <ApplicationWrapper>
        <CurveyBackgroundHeader>
          <div className="theme-switch-wrapper">
            <ThemeSwitch />
          </div>
          <div className="jumpstart-wrapper">
            <JumpStartBox value={300} title="Goals scored" />
            <JumpStartBox value={28} title="Total wins" />
            <JumpStartBox value={5} title="Total lost" />
          </div>
        </CurveyBackgroundHeader>
      </ApplicationWrapper>
    </ThemeProvider>
  );
}
