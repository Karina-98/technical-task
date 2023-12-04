import { Title } from 'components/Title/Title';
import Tolq from '../../assets/images/OurWork/Tolq.jpg';
import Codekeeper from '../../assets/images/OurWork/codekeeper.jpg';
import Feedback from '../../assets/images/OurWork/feedback.jpg';
import LegalSite from '../../assets/images/OurWork/legasSite.jpg';
import { ReactComponent as Left } from '../../assets/icon/Left.svg';
import { ReactComponent as Right } from '../../assets/icon/Right.svg';
import { Container } from 'components/Container/Container';
import {
  ContainerOutWork,
  DivCreate,
  Image,
  Item,
  List,
  Text,
  TextCodekeeper,
  TextCreate,
  TextFeedback,
  TextLegal,
  TextTolq,
} from './OurWork.styled';
import { ButtonMore } from 'components/ButtonMore/ButtonMore';
import { Element } from 'react-scroll';

export const OutWork = () => {
  return (
    <Container>
      <ContainerOutWork>
         <Element name="Work"></Element>
        <Title>Our works</Title>
        <List>
          <Item>
            <TextTolq>Tolq</TextTolq>
            <Text>
              Tolq is the translation solution built for e-commerce. It provides
              all pieces of the localization puzzle in one single integrated
              solution.
            </Text>
            <Image src={Tolq} alt="Tolq" />
            <ButtonMore />
          </Item>
          <Item>
            <TextFeedback>Feedback Labs</TextFeedback>
            <Text>
              Feedback Labs turns feedback into actionable insights for your
              team.
            </Text>
            <Image src={Feedback} alt="Feedback" />
            <ButtonMore />
          </Item>
          <Item>
            <TextCodekeeper>Codekeeper</TextCodekeeper>
            <Text>
              Codekeeper is an all-in-one solution for software developers and
              publishers to provide source code escrow as part of service level
              and license agreements.
            </Text>
            <Image src={Codekeeper} alt="Codekeeper" />
            <ButtonMore />
          </Item>
          <Item>
            <TextLegal>LegalSite</TextLegal>
            <Text>
              Protected against legal risks, privacy compliant and always
              up-to-date with the latest regulatory developments.
            </Text>
            <Image src={LegalSite} alt="LegalSite" />
            <ButtonMore />
          </Item>
        </List>
        <DivCreate>
        <Left />
        <TextCreate>
          Startups create a world that actually is better. Any problem that can
          be solved, will be solved by a startup, and that is a huge
          opportunity.
        </TextCreate>
          <Right />
          </DivCreate>
      </ContainerOutWork>
    </Container>
  );
};
