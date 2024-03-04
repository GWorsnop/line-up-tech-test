import { useRouteError } from "react-router-dom";
import { Container } from "../styles/Container.style";
import { StyledErrorDiv } from "./errorPage.style";
import notFound from "../../images/404-landscape.png";

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <Container>
      <StyledErrorDiv>
        <img src={notFound} alt="Not found" style={{ padding: "1rem" }}></img>
        <h1>Oops!</h1>
        <p style={{ fontSize: "large" }}>
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <i>{(error as { statusText?: string })?.statusText}</i>
        </p>
      </StyledErrorDiv>
    </Container>
  );
}
