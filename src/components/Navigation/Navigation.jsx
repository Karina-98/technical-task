import { LinkNavigation } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <LinkNavigation to="/">Home</LinkNavigation>
      <LinkNavigation to="/registration">Registration</LinkNavigation>
      <LinkNavigation to="/login">Login</LinkNavigation>
    </nav>
  );
};
