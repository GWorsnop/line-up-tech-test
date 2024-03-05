import React from "react";
import { Container } from "../styles/Container.style";
import { StyledHomeDiv } from "./HomePage.style";

export default function HomePage() {
  return (
    <Container>
      <StyledHomeDiv>
        <img
          src={require("../../images/under-construction.png")}
          alt="Under Construction"
        ></img>
        <h2>Sorry, this page doesn't exist... yet.</h2>
        <p style={{ fontSize: "large" }}>
          Please navigate to "/users" either using the URL or clicking Users in
          the Header.
        </p>
      </StyledHomeDiv>
    </Container>
  );
}
