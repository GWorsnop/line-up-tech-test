import styled from "styled-components";

export const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.cyan};
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.cyan};
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;
