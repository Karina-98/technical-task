
import { TextH1 } from 'components/Text/Text.styled';
import { Title } from 'components/Title/Title';
import {
  ContainerAboutUs,
  ContainerUs,
  Div,
  DivText,
  Image,
  Item,
  List,
  Text,
  TextNumber,
} from './AboutUs.styled';

import { ReactComponent as Vector } from "../../assets/icon/Vector.svg";
import Img from "../../assets/images/AboutUs/ImageAboutUs.jpg"
import { ContainerBackground } from 'components/Container/ContainerBackground';
import { Element } from 'react-scroll';

export const AboutUs = () => {
  return (
    <ContainerBackground>
      <Element name="AboutUs"></Element>
      <ContainerUs>
      <ContainerAboutUs>
        <Div>
          <Title>Who we are</Title>
          <DivText>
            <TextH1>
              We create products that have innovation and technology at their
              core.{' '}
            </TextH1>
            <TextH1>
              We value working with talented people that understand the
              possibilities of today.
            </TextH1>
          </DivText>
        </Div>
        <Image
          alt="image about us"
          src={Img}
        />
      </ContainerAboutUs>
      <List>
        <Item>
          <TextNumber>01</TextNumber>
          <Vector/>
          <Text>We develop innovative products, systems and services</Text>
        </Item>

        <Item>
          <TextNumber>02</TextNumber>
          <Vector/>
          <Text>Next we build teams to scale them into companies</Text>
        </Item>

        <Item>
          <TextNumber>03</TextNumber>
          <Vector/>
          <Text>Each startup solving one problem at a time</Text>
        </Item>
        </List>
      </ContainerUs>
      
    </ContainerBackground>
  );
};
