import { Container } from 'components/Container/Container';
import {
  ContainerFooter,
  Item,
  ItemMedia,
  LinkSendMail,
  LinkSocial,
  LinkWork,
  List,
  ListMedia,
  LogoIcon,
  TextContact,
  TextIcon,
  TextName,
} from './Footer.styled';
// import { ReactComponent as Icon } from '../../assets/icon/startupz.svg';
import { ReactComponent as Twitter } from '../../assets/icon/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/icon/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/icon/Linkedin.svg';
import { Link } from 'react-scroll'
import { Element } from 'react-scroll';


export const Footer = () => {
   

  return (
    <Container>
      <Element name="Contacts"></Element>
      <ContainerFooter>
        <List>
          <Item>
            <LogoIcon />
            <TextIcon>
              © 2020 Startupz. <br /> All rights reserved.{' '}
            </TextIcon>
          </Item>

          <Item>
                      <TextName>Companies</TextName>
                      <Link to="Work" smooth={true} duration={500}>
            <LinkWork>
              Tolq <br />
              LegalSite <br /> Codekeeper <br /> Feedback Labs
            </LinkWork>
            </Link>
          </Item>
          <Item>
            <TextName>Contact</TextName>

            <TextContact>
              World Trade Center - The Hague Prinses Margrietplantsoen 33 2595
              AM The Hague The Netherlands
            </TextContact>
            <Link to="SendMail" smooth={true} duration={500}>
              <LinkSendMail>Send us an email</LinkSendMail>
            </Link>
          </Item>
          <Item>
            <TextName>Follow us</TextName>
            <ListMedia>
              <ItemMedia>
                <LinkSocial href="https://twitter.com/startupz">
                  <Twitter />
                </LinkSocial>
              </ItemMedia>
              <ItemMedia>
                <LinkSocial href="https://www.instagram.com/startupzcom/">
                  <Instagram />
                </LinkSocial>
              </ItemMedia>
              <ItemMedia>
                <LinkSocial href="https://www.linkedin.com/company/startupz.com/">
                  <Linkedin />
                </LinkSocial>
              </ItemMedia>
            </ListMedia>
          </Item>
        </List>
      </ContainerFooter>
    </Container>
  );
};
