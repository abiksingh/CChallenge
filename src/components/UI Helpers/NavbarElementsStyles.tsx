import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #299ecc;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #44abe7;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavFont = styled.h1`
    color: #fafafa;
    font-size: 2rem;
`;
