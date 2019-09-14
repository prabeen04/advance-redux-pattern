import React from 'react';
import styled from 'styled-components';

export default function Navbar() {
    return (
        <NavbarWrapper>
            <NavbarList>
                <NavItem>  Home  </NavItem>
                <NavItem>  Portal  </NavItem>
                <NavItem>  Blog  </NavItem>
            </NavbarList>
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.div`
    display: flex;
    justify-content: center;
    background: transparent;

`;
const NavbarList = styled.ul`
    list-style: none;
`
const NavItem = styled.li`
    color: #fff;
    font-size: 1.2rem;
    padding: 0.3rem;
`