import React from "react";
import Home from "./components/organisms/HomePage";
import Header from "./components/molecules/Header";
import GlobalStyles from "./components/styles/Global.style";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.style";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/molecules/errorPage";
import UserPage from "./components/organisms/UserPage";

// Theme for the general styling of the app
const theme = {
  colors: {
    white: "#FFFFFF",
    grey: "#F6F8FB",
    cyan: "#399BA2",
    lightCyan: "#4AB8BF",
    blue: "##012B4F",
    black: "#121212",
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/:userId",
    element: <UserPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <RouterProvider router={router} />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
