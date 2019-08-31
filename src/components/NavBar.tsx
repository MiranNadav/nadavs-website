import React, { Component } from "react";
import styled from 'styled-components';
import NavBarLink from "./NavBarLink";
import DownloadResume from "../constants/DownloadResume";

export default class Navbar extends Component {
  render() {
    return (
      <NavContainer>
        <NavContent>
          <NavBarLink to="Welcome" label={'Welcome'} />
          <NavBarLink to="PastWork" label={'Experience'} />
          <NavBarLink to="Abilities" label={'Abilities'} />
          <NavBarLink to="AboutMySelf" label={'About me'} />
          <NavBarLink to="ContactInfo" label={'Contact me'} />
          <DownloadResume />
        </NavContent>
      </NavContainer>
    );
  }
}

const NavContainer = styled.nav`
  background-color: #FFFF;
  position: sticky;
  top: 0px;
  height: 1.5em;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-shrink: 0;
  z-index:100;
  overflow: hidden;
  @media (max-width: 815px) {
  display: none;
  }
`;

const NavContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 0.2;
  margin: auto;
  margin-left: 20%;
`;