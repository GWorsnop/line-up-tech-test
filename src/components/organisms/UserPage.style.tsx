import styled from "styled-components";

export const StyledUserContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding-top: 150px;
  }
`;

// This had to be changed to work for user 12.
export const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 200px;
  width: 200px;

  @media (min-width: 768px) {
    height: 250px;
    width: 250px;
  }
`;

export const StyledInfoContainer = styled.div`
  padding-top: 30px;
  text-align: center;

  @media (min-width: 768px) {
    padding-left: 40px;
    text-align: left;
  }
`;

export const StyledUserName = styled.dd`
  font-size: 32px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const StyledUserEmail = styled.div`
  display: flex;
  width: 100%;
  font-size: 24px;
  padding: 32px 8px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const ExtraDetailsContainer = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 80px 20px 0;
  }

  div {
    min-width: 50%;
    padding: 20px;
  }

  h3 {
    padding-bottom: 10px;
    font-size: 22px;
  }
`;
