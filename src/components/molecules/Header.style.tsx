import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  height: 80px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};

  a {
    text-decoration: none;
    color: black;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 0 8px;

  @media (min-width: 1024px) {
    padding: 0 40px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const LogoLink = styled.a`
  margin: auto;
  display: flex;
  padding-right: 53px;
`;

export const MenuMobile = styled.div`
  display: flex;
  flex-direction: row;
  width: 64px;
  padding-top: 24px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: 768px) {
    display: none;
    padding-left: 16px;
    margin-right: 128px;
  }
`;

export const MenuListMobile = styled.ul`
  display: none;
  position: absolute;
  left: -40px;
  top: 60px;
  width: 150px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 5%;

  ${MenuContainer}:hover & {
    display: block;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 6px 0 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightCyan};
  }

  @media (min-width: 768px) {
    padding: 0 24px;
  }
`;

export const MenuList = styled.ul`
  display: none;
  justify-content: center;
  margin-right: 25%;
  color: black;

  @media (min-width: 768px) {
    display: flex;
    height: 100%;
    width: 50%;
    font-size: 20px;
    line-height: 28px;
  }

  a {
    display: flex;
    height: 100%;
  }
`;

export const StyledImage = styled.img`
  height: 55px;
  width: 60px;
`;
