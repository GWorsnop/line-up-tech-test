import styled from "styled-components";

export const StyledErrorDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 7rem;

  h1 {
    font-size: 36px;
    padding: 1rem;

    @media (min-width: 768px) {
      font-size: 48px;
    }
  }

  p {
    padding-top: 1rem;
  }
`;
