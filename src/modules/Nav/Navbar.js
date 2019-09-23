import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ThemeSwitch from "../settings/theme/ThemeSwitch";

export default function Navbar() {
    return (
        <NavbarWrapper>
            <NavbarList>
                <NavItem> <NavLink to='/'> Home </NavLink> </NavItem>
                <NavItem> <NavLink to='/portal'> Portal </NavLink> </NavItem>
                <NavItem> <NavLink to='/blog'> Blog </NavLink> </NavItem>
            </NavbarList>
            <ThemeSwitch />
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: transparent;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6200;

`;
const NavbarList = styled.ul`
    list-style: none;
    display: flex;
`
const NavItem = styled.li`
    padding: 0.3rem 1rem;
`
const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
    padding-bottom: 0.3rem;
    :hover{
        color: #eee;
    }
`