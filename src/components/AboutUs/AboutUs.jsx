
import { TextH1 } from 'components/Text/Text.styled';
import { Title } from 'components/Title/Title';
import {
  ContainerAboutUs,
  Div,
  DivText,
  Image,
  Item,
  List,
  Text,
  TextNumber,
} from './AboutUs.styled';

import {ReactComponent as Vector} from "../../assets/icon/Vector.svg"
import image from "../../assets/images/aboutUs/image-aboutUs.jpg"
import { ContainerBackground } from 'components/Container/ContainerBackground';

export const AboutUs = () => {
  return (
      <ContainerBackground>
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
          src={image}
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
    </ContainerBackground>
  );
};
