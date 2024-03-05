import React from "react";
import UsersPage from "./components/organisms/UsersPage";
import Header from "./components/molecules/Header";
import GlobalStyles from "./components/styles/Global.style";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.style";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/molecules/errorPage";
import SingleUserPage from "./components/organisms/SingleUserPage";
import HomePage from "./components/molecules/HomePage";

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
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  {
    path: "/users",
    element: <UsersPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/:userId",
    element: <SingleUserPage />,
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
