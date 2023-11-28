import { Container } from 'components/Container/Container';
import { ReactComponent as Left } from '../../assets/icon/Left.svg';
import { ReactComponent as Right } from '../../assets/icon/Right.svg';
import { ReactComponent as Task } from '../../assets/icon/Task.svg';
import { Div, Text } from './LoveProblem.styled';

export const LoveProblem = () => {
  return (
    <Container>
      <Div>
        <Left />
        <Text>We love solving problems!</Text>
        <Right />
        <Task />
      </Div>
    </Container>
  );
};
