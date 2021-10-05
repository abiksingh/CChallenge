import React from "react";
import ProjectScreenById from "./ProjectScreenById";
import styled from "styled-components";
import { device } from "../components/UI Helpers/MediaQuery";

interface Params {
    id: string;
    setToggle: any;
}

const Drawer = ({ id, setToggle }: Params) => {
    const SideDrawer = styled.nav`
        height: 100%;
        background: #faf7f7;
        box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        right: 0;
        width: 50vw;
        z-index: 10000;
        transition: width 0.3s ease-out;

        @media ${device.xs} {
            width: 100vw;
        }

        @media ${device.sm} {
            width: 50vw;
        }

        @media ${device.lg} {
            width: 50vw;
        }
    `;

    return (
        <SideDrawer>
            <ProjectScreenById setToggle={setToggle} id={id} />
        </SideDrawer>
    );
};

export default Drawer;
