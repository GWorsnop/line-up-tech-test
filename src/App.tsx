import React from "react";
import Home from "./components/HomePage";
import Header from "./components/molecules/Header";
import GlobalStyles from "./components/styles/Global.style";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.style";

// Theme for the general styling of the app
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Home />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
