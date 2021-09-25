import React from "react";
import ProjectScreenById from "./ProjectScreenById";
import styled from "styled-components";

const Drawer = ({ id, setToggle, toggle }: any) => {
    const SideDrawer = styled.nav<{ toggle: any }>`
        height: 100%;
        background: #faf7f7;
        box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        right: 0;
        width: 400px;
        transition: width 0.3s ease-out;
    `;

    return (
        <SideDrawer toggle={toggle}>
            <ProjectScreenById setToggle={setToggle} id={id} />
        </SideDrawer>
    );
};

export default Drawer;
