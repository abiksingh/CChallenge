import React from "react";
import { Nav, NavLink, NavMenu, NavFont } from "./styles/NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/">
                        <NavFont>COMATCH</NavFont>{" "}
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
