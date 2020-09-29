import styled from "styled-components";

import { Props } from '.';

export const Button = styled.button<Props>`
    display: flex;
    align-items: center; // aligned V
    justify-content: center; // aligned H
    flex-shrink :0;

    width : 48px;
    height: 48px;
    border-radius:50%;

    margin-bottom: 8px;

    background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

    position: relative;
    cursor: pointer;

    > img {
        width: 24px;
        height:24px;
    }

    transition: border-radius .2s, background-color: .2s;

    &::before {
        width: 9px;
        height: 9px;
        border-radius: 50%;

        position: absolute; // you have to set the position relative up there or this wont work because position is based on other thing
        left: -17px;
        top: calc(50% - 4.5px); //middle of 9px

        background-color: var(--white);

        content: '';
        display: ${props => props.hasNotifications ? 'inline' : 'none'};
    }

    &::after{
        background-color: var(--notification);
        width: auto;
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(----quaternary);

        text-align: right;
        font-size: 13px;
        font-wright: bold;
        color: var(--white);

        content: '${props => props.mentions && props.mentions}';
        display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'}
    }

    &.active,
    &:hover {
        border-radius: 16px;
        background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'}
    }

`;
