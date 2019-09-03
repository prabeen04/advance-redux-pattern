import React from 'react';
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ApplicationWrapper } from "./components/UI/Layout";
import './App.css';
import ThemeSwitch from './modules/settings/theme/ThemeSwitch';

function App() {
  const theme = useSelector(({ theme }) => theme.theme)
  return (
    <ThemeProvider theme={theme}>
      <ApplicationWrapper>
        <h1>Advance redux pattern</h1>
        <button onClick={handleClick}>test</button>
        <ThemeSwitch />
      </ApplicationWrapper>
    </ThemeProvider>
  );
}

export default App;
