import { Title } from 'components/Title/Title';
import { ReactComponent as Vector } from '../../assets/icon/Vector.svg';
import {
  ContainerValue,
  DivTitle,
  Image,
  Item,
  ItemText,
  ItemText2,
  ItemTextNumber,
  List,
} from './OurValues.styled';

import light from '../../assets/images/OurValues/light.png';
// import { ReactComponent as Light } from '../../assets/icon/Light.svg'

import { ContainerBackground } from 'components/Container/ContainerBackground';

export const OurValues = () => {
  return (
    <ContainerBackground>
      <ContainerValue>
        <DivTitle>
                  <Title>Our core values</Title>
                  {/* <Image> */}
                      {/* <Light width={90} height={108} /> */}
                  {/* </Image> */}
                  <Image src={light} alt='light' />
        </DivTitle>
        
        <List>
          <Item>
            <ItemTextNumber>01. Innovation</ItemTextNumber>
            <Vector />
            <ItemText>
              Startupz operates where entrepreneurship and technology intersect.
              We design solutions and turn them into businesses models.
            </ItemText>
          </Item>
          <Item>
            <ItemTextNumber>02. People</ItemTextNumber>
            <Vector />
            <ItemText2>
              Talent is what enable us to create great companies.
            </ItemText2>
          </Item>
        </List>
      </ContainerValue>
    </ContainerBackground>
  );
};
