import styled from "styled-components";
import { device } from "./MediaQuery";

export const CardWrapper = styled.div`
    position: relative;
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 300px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 2rem;
`;

export const Grid = styled.div`
    display: grid;

    @media ${device.xs} {
        grid-template-columns: 1fr;
    }

    @media ${device.sm} {
        grid-template-columns: 1fr 1fr;
    }

    @media ${device.lg} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const CardHeader = styled.header`
    position: relative;
`;

export const CardHeading = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export const CardBody = styled.div`
    padding-right: 32px;
    padding-left: 32px;
`;

export const CardStatus = styled.h4<{ status: string }>`
    position: relative;
    display: block;
    width: 100%;
    font-size: 12px;
    text-align: center;
    color: ${(props) => (props.status === "done" ? "green" : props.status === "request" ? "blue" : "purple")};
`;

export const CardDate = styled.h4`
    position: relative;
    display: block;
    width: 100%;
    font-size: 12px;
    font-weight: 100;
    text-align: center;
`;

export const CardButton = styled.button`
    display: block;
    width: 100%;
    padding: 12px 0;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background-color: #1f6c86;
    border: 0;
    border-radius: 35px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        transform: translate(0, -5px);
    }
`;

export const CardParagraph = styled.p`
    position: relative;
    font-size: 0.8rem;
    text-decoration: none;
    text-align: start;
    color: #aaa;
    cursor: pointer;
    transition: color 0.25s ease-in;
    display: -webkit-box;
    height: 6rem;

    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    &:hover {
        color: #777;
    }
`;

export const DrawerWrapper = styled.div`
    position: relative;
    top: 1rem;
    margin: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ConsultantHeader = styled.h4`
    position: relative;
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    color: #9e9b9b;
    margin-top: 1rem;
`;

export const ConsultantUlWrapper = styled.ul`
    position: relative;
`;

export const ConsultantWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @media ${device.xs} {
        margin-top: 2rem;
    }

    @media ${device.sm} {
        margin-top: 12rem;
    }

    @media ${device.lg} {
        margin-top: 4rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ConsultantImage = styled.img`
    position: relative;
    border-radius: 100%;
    width: 5rem;
    height: 5rem;
    margin-top: 2rem;

    @media ${device.xs} {
        width: 3rem;
        height: 3rem;
        margin-top: 2rem;
    }

    @media ${device.sm} {
        width: 3.5rem;
        height: 3.5rem;
        margin-top: 1rem;
    }

    @media ${device.lg} {
        width: 5rem;
        height: 5rem;
        margin-top: 2rem;
    }
`;

export const ConsultantList = styled.li`
    position: relative;
    list-style-type: none;
`;

export const DrawerButton = styled.button`
    display: block;
    width: 5rem;
    padding: 12px 0;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background-color: #3c8eaa;
    border: 0;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        transform: translate(0, -5px);
    }
`;

export const DrawerDate = styled.h4`
    position: relative;
    display: block;
    width: 100%;
    text-align: left;
    font-size: 1rem;
    font-weight: 100;
    @media ${device.xs} {
        font-size: 0.6rem;
    }

    @media ${device.sm} {
        font-size: 1rem;
    }

    @media ${device.lg} {
        font-size: 1rem;
    }
`;

export const DrawerParagraph = styled.p`
    position: relative;
    display: block;
    font-size: 1rem;
    text-decoration: none;
    text-align: start;
    color: #131212;
    height: 6rem;

    @media ${device.xs} {
        font-size: 0.6rem;
    }

    @media ${device.sm} {
        font-size: 1rem;
    }

    @media ${device.lg} {
        font-size: 1rem;
    }
`;

export const DrawerStatus = styled.h4<{ status: string }>`
    position: relative;
    display: block;
    width: 100%;
    font-size: 1rem;
    text-align: left;
    color: ${(props) => (props.status === "done" ? "green" : props.status === "request" ? "blue" : "purple")};
`;

export const DrawerHeading = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;

    @media ${device.xs} {
        font-size: 0.8rem;
    }

    @media ${device.sm} {
        font-size: 1.5rem;
    }

    @media ${device.lg} {
        font-size: 1.5rem;
    }
`;

export const DurationHeader = styled.h4`
    position: relative;
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    color: #9e9b9b;
`;

export const DescriptionHeader = styled.h4`
    position: relative;
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    color: #9e9b9b;
`;
