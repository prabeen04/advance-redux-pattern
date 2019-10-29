import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeSwitch from "../settings/theme/ThemeSwitch";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarList>
        <NavItem>
          {" "}
          <NavLink to="/"> Home </NavLink>{" "}
        </NavItem>
        <NavItem>
          {" "}
          <NavLink to="/blog"> Blog </NavLink>{" "}
        </NavItem>
        <NavItem>
          {" "}
          <NavLink to="/concurrent"> Concurrent (ALPHA) </NavLink>{" "}
        </NavItem>
      </NavbarList>
      <ThemeSwitch />
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #42a5f5;
  width: 100vw;
  padding: 0.3rem;
`;
const NavbarList = styled.ul`
  list-style: none;
  display: flex;
`;
const NavItem = styled.li`
  padding: 0.3rem 1rem;
`;
const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  :hover {
    color: #eee;
  }
`;
