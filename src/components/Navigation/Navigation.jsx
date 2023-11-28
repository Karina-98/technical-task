import { Link } from 'react-router-dom';
import {  ButtonWork, DivNavigation, TextHeader } from './Navigation.styled';

export const Navigation = () => {
  return (<DivNavigation>
    <Link>
        <TextHeader>Startupz</TextHeader>
      </Link>
      <Link>
        <TextHeader>Contacts</TextHeader>
      </Link>
    <ButtonWork>Work with us!</ButtonWork>
    </DivNavigation>
  );
};
