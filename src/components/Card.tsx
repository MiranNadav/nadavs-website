import React from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import BasicText from './BasicText';
import { MAROON, OLIVE, TEAL, LINK_BLUE } from '../constants/Colors';

interface CardProps {
    src: string,
    name: string,
    title: string,
    dates: string,
    text: string,
    linkText?: string,
    link?: string,
    marginBottom?: string
}

const Card = ({ src, name, title, dates, text, marginBottom, linkText = '', link }: CardProps) => {
    return (<Container marginBottom={marginBottom}>
        <SquaredImage src={src} />
        <TextContainer>
            <BasicText text={name} color={MAROON} fontWeight={'bold'} />
            <BasicText text={title} color={OLIVE} fontWeight={'bold'} />
            <BasicText text={dates} color={TEAL} fontWeight={'bold'} />
            {link ?
                <Link href={link} target="_blank">
                    <BasicText text={linkText} color={LINK_BLUE} fontWeight={'bold'} />
                </Link>
                : null}
            <BasicText text={text} isP />
        </TextContainer>
    </Container>)
}

const SquaredImage = styled.img`
    object-fit: cover;  
    width: 300px;
    height: 250px;
    border-radius: 30px;
`;

const Link = styled.a`
    text-decoration: none;
`;

const TextContainer = styled.div`
    margin-left: 3vw;
    @media screen and (max-width: 1400px){
        margin-top: 2vh;
    }  
    @media screen and (max-width: 400px){
        margin-left: 0vw;
    }  
`;

const Container = styled(CenteredContainer)`
        flex-direction: row;
        justify-content: flex-start; 
        align-items: center;
        width: 100%;
        min-width: 300px;
        width: 60vw; 
        margin-top: 6vh;
        margin-bottom: ${props => props.marginBottom};
        @media screen and (max-width: 1000px){
            flex-direction: column;
        }

`;
export default Card;
