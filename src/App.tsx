import React from 'react';
import Welcome from './pages/Welcome';
import PastWork from './pages/PastWork';
import Navbar from './components/NavBar';
import AboutMySelf from './pages/AboutMySelf';
import Abilities from './pages/Abilities';
import ContactInfo from './pages/ContactInfo';
import MobileMenu from './components/MobileMenu';
import SiteDescription from './pages/SiteDescription';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Navbar />
      <MobileMenu />
      <Welcome />
      <PastWork />
      <Abilities />
      <AboutMySelf />
      <ContactInfo />
      <SiteDescription />
    </Container>
  );
}

const Container = styled.div``

export default App;
