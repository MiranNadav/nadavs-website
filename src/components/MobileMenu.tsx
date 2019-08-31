import React, { ReactNode, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { MAIN_WHITE, GREY_SHADE, BLACK } from '../constants/Colors';
import DownloadResume from '../constants/DownloadResume';
import StyledSpan from './StyledSpan';
import NavBarLink from './NavBarLink';

interface ISpacedNavBarLink {
    to: string,
    label: string,
}

interface IReactNode {
    [name: string]: ReactNode
}

interface IShowX {
    showX: boolean | undefined
}

const MobileMenu = () => {
    const [showX, toggleX] = useState(false);

    const showHideX = async () => {
        toggleX(!showX);
        if (!showX) {
            document.body.style.overflow = "hidden"
            document.body.style.position = "relative"
        } else {
            document.body.style.overflow = "visible"
            document.body.style.position = "static"
        }
    }


    const SpacedNavBarLink = ({ to, label }: ISpacedNavBarLink) => {
        return (
            <SpacedSpan>
                <NavBarLink to={to} label={label} onClick={showHideX} />
            </SpacedSpan>
        );
    };

    const SpacedNavBarDownload = ({ download }: IReactNode) => {
        return (
            <SpacedSpan>
                {download}
            </SpacedSpan>
        )
    }

    const SpacedSpan = ({ children }: IReactNode) => {
        return (
            <StyledSpan margin={'3vh 0 0 0'}>
                {children}
            </StyledSpan>
        )
    }

    return (
        <MenuContainer>
            <MenuButtonContainer onClick={showHideX}>
                <Bar1 showX={showX} />
                <Bar2 showX={showX} />
                <Bar3 showX={showX} />
            </MenuButtonContainer>
            <Container showX={showX}>
                <SpacedNavBarLink to="Welcome" label={'Welcome'} />
                <SpacedNavBarLink to="PastWork" label={'Experience'} />
                <SpacedNavBarLink to="Abilities" label={'Abilities'} />
                <SpacedNavBarLink to="AboutMySelf" label={'About me'} />
                <SpacedNavBarLink to="ContactInfo" label={'Contact me'} />
                <SpacedNavBarDownload download={<DownloadResume />} />
            </Container>
            <ShadeDiv showX={showX} />
        </MenuContainer>
    )
}

const ShadeDiv = styled.div<IShowX>`
  position: fixed;
  display: ${props => props.showX ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
`;

const ANIMATION_TIME = '0.7s';

const MenuContainer = styled.div`
    position: absolute; 
    top: 0px;
    @media (min-width: 815px) {
    display: none;
    }
`;

const MenuButtonContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 15px;
    z-index: 10;
    position: fixed; 
    
`;

const Bar = styled.div<IShowX>`
    width: 25px;
    height: 3px;
    background-color: ${props => props.showX ? BLACK : GREY_SHADE};
    transition: background-color ${ANIMATION_TIME} linear;
    margin: 6px 0;
    transition: 0.4s;
`;


const Bar1 = styled(Bar)`
    ${props => props.showX ? changeBar1 : null};
`;

const Bar2 = styled(Bar)`
    ${props => props.showX ? changeBar2 : null};
`;

const Bar3 = styled(Bar)`
    ${props => props.showX ? changeBar3 : null};
`;


const changeBar1 = css`
    -webkit-transform: rotate(-45deg) translate(-5px, 6px);
    transform: rotate(-45deg) translate(-5px, 6px);
`;

const changeBar2 = css`
    opacity: 0;
`;

const changeBar3 = css`
    -webkit-transform: rotate(45deg) translate(-7px, -8px);
    transform: rotate(45deg) translate(-7px, -8px);
`;

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const animationIn = css`
    animation: ${slideIn};
    animation-duration: ${ANIMATION_TIME};
`;
const animationOut = css`
    animation: ${slideOut};
    animation-duration: ${ANIMATION_TIME};
`

const Container = styled.span<IShowX>`
    display: flex; 
    flex-direction: column;
    align-items: center;
    position:fixed;
    visibility: 'visable'; 
    visibility: ${props => props.showX ? 'visable' : 'hidden'}; 
    z-index: ${props => props.showX ? 1 : 0}; 
    transition: visibility ${ANIMATION_TIME} linear, z-index ${ANIMATION_TIME} linear;
    height: 40vh;
    width: 100vw;
    z-index: 9;
    background-color: ${MAIN_WHITE};
    ${props => props.showX ? animationIn : animationOut};
`;



export default MobileMenu;