import React from 'react'
import CenteredContainer from '../components/CenteredContainer';
import BasicText from '../components/BasicText';
import styled from 'styled-components';
import LinkedImage from '../components/LinkedImage';
import { GIT_HUB_LOGO, PERSONAL_WEBSITE_REPOSITORY } from '../constants/URL';

const SiteDescription = () => (
    <CenteredContainer>
        <MobileContainer>
            <BasicText text={'This completely responsive website was made using React'} fontSize='12px' />
            <BasicText text={'with Hooks, styled component and Typescript'} fontSize='12px' />
        </MobileContainer>
        <FullScreenContainer>
            <BasicText text={'This completely responsive website was made using React with Hooks, styled component and Typescript'} fontSize='12px' />
        </FullScreenContainer>
        <ImageContainer>
            <LinkedImage href={PERSONAL_WEBSITE_REPOSITORY} src={GIT_HUB_LOGO} width='30px' height='30px' />
        </ImageContainer>
    </CenteredContainer>
)

const ImageContainer = styled.div`
    margin-top: 1vh;
`
const FullScreenContainer = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
`
const MobileContainer = styled(CenteredContainer)`
    @media (min-width: 600px) {
        display: none;
    }
`

export default SiteDescription;