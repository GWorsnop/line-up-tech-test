import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  z-index: 10;
  flex-direction: row;
  height: 80px;
  max-width: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grey};
  opacity: 0.9;
`;
