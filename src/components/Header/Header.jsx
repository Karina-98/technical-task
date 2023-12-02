import { Logo } from 'components/Logo/Logo';

import { Navigation } from 'components/Navigation/Navigation';
import { ContainerHeader } from './Header.styled';
import { Container } from 'components/Container/Container';

export const Header = () => {
  return <Container>
    <ContainerHeader>
      <Logo />
      <Navigation />
    </ContainerHeader>
    
  </Container>
};
