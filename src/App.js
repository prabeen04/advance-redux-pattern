import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ApplicationWrapper } from "./components/UI/Layout";
import Navbar from "./modules/Nav/Navbar";
import Routes from "./modules/Routes/Routes";
import "./App.css";

function App() {
  const theme = useSelector(({ theme }) => theme.theme);
  return (
    <ThemeProvider theme={theme}>
      <ApplicationWrapper>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Navbar />
        </div>
        <Routes />
      </ApplicationWrapper>
    </ThemeProvider>
  );
}

export default App;
