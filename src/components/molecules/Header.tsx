import React from "react";
import {
  StyledHeader,
  MenuContainer,
  MenuList,
  MenuItem,
  LogoContainer,
  LogoLink,
  StyledImage,
  MenuListMobile,
  MenuMobile,
} from "./Header.style";
import { Menu } from "react-feather";

export default function Header() {
  return (
    <StyledHeader>
      <MenuContainer>
        <MenuMobile>
          <Menu />
          <MenuListMobile>
            <a href="/users">
              <MenuItem>Users</MenuItem>
            </a>
            <MenuItem>Invoices</MenuItem>
            <MenuItem>FAQ</MenuItem>
            <MenuItem>Settings</MenuItem>
          </MenuListMobile>
        </MenuMobile>
        <LogoContainer>
          <LogoLink href="/">
            <StyledImage
              src={require("../../images/lineup-icon.png")}
              alt="Lineup Logo"
            />
          </LogoLink>
        </LogoContainer>
        <MenuList>
          <a href="/users">
            <MenuItem>Users</MenuItem>
          </a>
          <MenuItem>Invoices</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuList>
      </MenuContainer>
    </StyledHeader>
  );
}
