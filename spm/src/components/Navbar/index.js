import React from 'react';
import styled from 'styled-components';
import { Nav, NavLink, NavIcon, Bars} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <styled>
            <Nav>
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars/>
                </NavIcon>
            </Nav>
            </styled>
        </>
    );
};

export default Navbar;

