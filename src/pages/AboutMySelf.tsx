import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import BasicText from '../components/BasicText';
import { aboutMySelfDescription } from '../constants/Texts';
import TextContainer from '../components/TextContainer';
import { LAST_ELEMENT_IN_PARAGRAPH_MARGIN } from '../constants/Sizes';
import ParagraphTitle from '../components/ParagraphTitle';

const AboutMySelf = () => (
    <CenteredContainer id={'AboutMySelf'}>
        <ParagraphTitle isTitle text={'Little bit about myself'} />
        <TextContainer marginBottom={LAST_ELEMENT_IN_PARAGRAPH_MARGIN}>
            <BasicText text={aboutMySelfDescription} isP />
        </TextContainer>
    </CenteredContainer>
);

export default AboutMySelf;