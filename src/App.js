import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ApplicationWrapper } from './components/UI/Layout';
import './App.css';
import Routes from './modules/Routes/Routes';
import Navbar from './modules/Nav/Navbar';

export default function App() {
  const theme = useSelector(({ theme }) => theme.theme);
  return (
    <ThemeProvider theme={theme}>
      <ApplicationWrapper>
        <Navbar />
        <Routes />
      </ApplicationWrapper>
    </ThemeProvider>
  );
}
