import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  @media (min-width: 768px) {
    font-size: large;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
  }
`;

export const StyledImage = styled.img`
  border-radius: 16px;
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
  gap: 0 4px;
  height: 100px;
  width: 100%;
  padding: 0.5rem 0;

  dt {
    font-weight: bold;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const StyledButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.cyan};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  line-height: 24px;
  padding: 8px 22px;
  font-weight: 900;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightCyan};
    cursor: pointer;
  }
`;
