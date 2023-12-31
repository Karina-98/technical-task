import { Container } from 'components/Container/Container';
import {
  ButtonWelcome,
  Div,
  DivWelcome,
  Image,
  TitleWelcome,
} from './Welcome.styled';
import { TextH1 } from 'components/Text/Text.styled';
import Img from '../../assets/images/Welcome/BackgroundWelcome.jpg';
import { Link } from 'react-scroll'

export const Welcome = () => {
  return (
    <Container>
      
      <Div>
        <Link to="Work" smooth={true} duration={500}>
        <DivWelcome>
          <TitleWelcome>We Create Startups.</TitleWelcome>
          <TextH1>
            We are startup studio that develops and launches new companies.
          </TextH1>
          <ButtonWelcome>See our works</ButtonWelcome>
           <Image alt="image-welcome" src={Img} />
        </DivWelcome>
       </Link>
      </Div>
    </Container>
  );
};
