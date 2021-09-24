import React from "react";
import styled, { css, keyframes } from "styled-components";

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

export const CardStatus = styled.h4<{ status: any }>`
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
    text-align: center;
    color: #aaa;
    cursor: pointer;
    transition: color 0.25s ease-in;
    display: -webkit-box;
    height: 6rem;
    line-height: 0.9rem;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    &:hover {
        color: #777;
    }
`;
