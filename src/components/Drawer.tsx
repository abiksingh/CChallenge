import React from "react";
import ProjectScreenById from "./ProjectScreenById";
import styled from "styled-components";

const Drawer = ({ id }: any) => {
    const SideDrawer = styled.nav`
        height: 100%;
        background: #faf7f7;
        box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 70%;
        max-width: 400px;
        /* z-index: 200;
        transform: translateX(-100%);
        transition: transform 0.3s ease-out; */
    `;

    return (
        <SideDrawer className="side-drawer">
            <ProjectScreenById id={id} />
        </SideDrawer>
    );
};

export default Drawer;
