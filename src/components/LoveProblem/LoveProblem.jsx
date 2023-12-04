import { Container } from 'components/Container/Container';
import { ReactComponent as Left } from '../../assets/icon/Left.svg';
import { ReactComponent as Right } from '../../assets/icon/Right.svg';
import { ReactComponent as Close } from '../../assets/icon/x.svg';
import People from '../../assets/images/LoveProblem/People.png';
import { ReactComponent as Task } from '../../assets/icon/Task.svg';
import {
  Div,
  DivClose,
  DivRectangle,
  DivRectangleSmall,
  DivTask,
  Image,
  Text,
  TextTask,
} from './LoveProblem.styled';

export const LoveProblem = () => {
  return (
    <Container>
      <Div>
        <Left />
        <Text>We love solving problems!</Text>
        <Right />
        <DivTask>
          <Task />
        </DivTask>
        <TextTask>
          Hi! I am Ben, your virtual assistant. How can I make your day better?
        </TextTask>
        <DivRectangle>
          <DivRectangleSmall></DivRectangleSmall>
        </DivRectangle>
              <Image src={People} alt="people" />
              <DivClose>
                  <Close />
              </DivClose>
        
      </Div>
    </Container>
  );
};
