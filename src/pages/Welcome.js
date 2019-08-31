import React from 'react';
import styled from 'styled-components';
import video from '../videos/Cinemagraph of a Coffee.mp4'
import BasicText from '../components/BasicText';
import { MAIN_WHITE } from '../constants/Colors';

const Welcome = () => {
    return <Container id={'Welcome'}>
        <BasicText text={`Welcome to Nadav Miran's site`} fontWeight={'bold'} fontStyle={'italic'} color={MAIN_WHITE} fontSize={'1.5em'} isTitle />
        <BasicText text={`Fullstack developer`} fontWeight={'bold'} color={MAIN_WHITE} isTitle />
        <Video autoPlay loop muted>
            <Source src={video} type="video/mp4" />
        </Video>
    </Container>
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;  
    position: absolute; 
`;
const Source = styled.source``;

export default Welcome;