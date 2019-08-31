import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import Card from '../components/Card';
import { SMALL_RUMBLE_DESCRIPTION, IDC_DESCRIPTION } from '../constants/Texts';
import ParagraphTitle from '../components/ParagraphTitle';
import { LAST_ELEMENT_IN_PARAGRAPH_MARGIN } from '../constants/Sizes';
import RumbleRecommendationLetter from '../constants/RumbleRecommendationLetter'

const PastWork = () => (
    <CenteredContainer id={'PastWork'}>
        <ParagraphTitle text={`What I've been up to`} isTitle />
        <Card
            src='http://www.mnews.co.il/upload/1503476102.png'
            name='Rumble'
            title='Fullstack engineer'
            dates='March 2018 - July 2019'
            link={RumbleRecommendationLetter}
            linkText='View recommendation letter '
            text={SMALL_RUMBLE_DESCRIPTION}
        />
        <Card
            src='https://i.ibb.co/Z2Yg03R/IDC-logo-White-svg.png'
            name='IDC'
            title='Computer science student'
            dates='November 2017 - September 2019'
            text={IDC_DESCRIPTION}
            marginBottom={LAST_ELEMENT_IN_PARAGRAPH_MARGIN}
        />
    </CenteredContainer>
);

export default PastWork;