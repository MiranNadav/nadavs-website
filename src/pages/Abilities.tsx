import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import styled from 'styled-components';
import Logo from '../components/Logo';
import BasicText from '../components/BasicText';
import { SECONDARY_WHITE, MAROON } from '../constants/Colors';
import { JAVASCRIPT_DESCRIPTION, NODE_JS_DESCRIPTION, REACT_DESCRIPTION, CSHARP_DESCRIPTION, SQL_DESCRIPTION } from '../constants/Texts';
import TextContainer from '../components/TextContainer';
import ParagraphTitle from '../components/ParagraphTitle';


const Abilities = () => (
    <CenteredContainer id={'Abilities'} backgroundColor={SECONDARY_WHITE}>
        <ParagraphTitle text={'What I know to do'} isTitle />
        <LogoContainer>
            <Logo src={'https://i.ibb.co/9WQxxN1/javascript.png'} />
            <Logo src={'https://i.ibb.co/qjHzdpd/ts.png'} />
            <Logo src={'https://i.ibb.co/SmdyWTZ/node.png'} />
            <Logo src={'https://i.ibb.co/GMydpKZ/react.png'} />
            <Logo src={'https://i.ibb.co/prHTgVJ/java.png'} />
            <Logo src={'https://i.ibb.co/CHjBdvS/C.png'} />
            <Logo src={'https://i.ibb.co/yy0wYHF/HTML5.png'} />
            <Logo src={'https://i.ibb.co/QnbqdsR/CSS.png'} />
            <Logo src={'https://i.ibb.co/pw0XBTK/sql.png'} />
        </LogoContainer>
        <AbilityDescription coloredText='Javascript - ' text={JAVASCRIPT_DESCRIPTION} />
        <AbilityDescription coloredText='Node js - ' text={NODE_JS_DESCRIPTION} />
        <AbilityDescription coloredText='React - ' text={REACT_DESCRIPTION} />
        <AbilityDescription coloredText='C# / Java - ' text={CSHARP_DESCRIPTION} />
        <AbilityDescription coloredText='SQL - ' text={SQL_DESCRIPTION} marginBottom={'20px'} />
    </CenteredContainer>
);

interface IAbilityDescription {
    coloredText: string,
    text: string,
    marginBottom?: string
}

const AbilityDescription = ({ coloredText, text, marginBottom = 'none' }: IAbilityDescription) => (
    (<TextContainer marginBottom={marginBottom}>
        <BasicText text={coloredText} color={MAROON} fontWeight={"bold"} isP />
        <BasicText text={text} isP />
    </TextContainer>)
);

const LogoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    overflow-x: auto;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 2vh;
`;

export default Abilities;