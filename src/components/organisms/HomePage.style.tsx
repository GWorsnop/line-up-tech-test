import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;

  @media (min-width: 768px) {
    font-size: large;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }
`;

export const StyledImage = styled.img`
  border-radius: 0.375rem;
  width: 200px;

  @media (min-width: 768px) {
    width: 250px;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const StyledList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0 0.5rem;
  height: 100px;
  width: 100%;
  padding: 0.5rem 0;

  dt {
    font-weight: bold;
  }
`;
