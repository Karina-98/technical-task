import React from 'react';
import { Link } from 'react-scroll'

import {  ButtonWork, DivNavigation, TextHeader } from './Navigation.styled';

export const Navigation = () => {
  return (<DivNavigation>
    <Link to="AboutUs" smooth={true} duration={500}>
        <TextHeader>Startupz</TextHeader>
      </Link>
      <Link to="Contacts" smooth={true} duration={500}>
        <TextHeader>Contacts</TextHeader>
      </Link>
    <Link to="Work" smooth={true} duration={500}><ButtonWork>Work with us!</ButtonWork></Link>
    </DivNavigation>
  );
};
