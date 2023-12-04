import styled, { keyframes } from 'styled-components';
import { ReactComponent as Icon } from '../../assets/icon/startupz.svg';


const jumpAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ContainerFooter = styled.div`
padding-top: 50px;
padding-bottom: 80px;

@media(min-width: 768px){
    padding-top: 90px;

}

@media(min-width: 1440px){
    padding-bottom: 123px;
}
`

export const List = styled.ul`
display: flex;
flex-wrap: wrap;

li:first-child{
    margin-right: 30px;
}

li:nth-child(2){
    margin-right: 30px;

}

& > :last-child{
    margin-top: 50px;
}


@media(min-width: 768px){
    flex-wrap: nowrap;
& > :last-child{
    margin-top: 0;
}
   li:first-child{
    margin-right: 70px;
}

li:nth-child(2){
    margin-right: 50px;

}

li:nth-child(3){
    margin-right: 50px;
} 
}


@media(min-width: 1140px){
    flex-wrap: nowrap;
margin-top: 0;
   li:first-child{
    margin-right: 230px;
}

li:nth-child(2){
    margin-right: 155px;

}

li:nth-child(3){
    margin-right: 90px;
} 
}
`

export const Item = styled.li`
display: flex;


&:not(:last-child){
flex-direction: column;
}

@media(min-width: 768px){
   flex-direction: column; 
}
`

export const LinkWork = styled.a`
color: var(--Complementary-Green, #46B8C8);
font-family: Circular Std;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 35px; 
cursor: pointer;

&:hover{
 color: var(--Primary-Orange, #FB8958);
}

@media(min-width: 768px){
    font-size: 18px;
}
`

export const ListMedia = styled.ul`
display: flex;
margin-left: 35px;




@media(min-width: 768px){
  flex-direction: column; 
  margin-left: 0; 


  li:not(:last-child){
    margin-bottom: 15px;
}
}
`
export const TextContact = styled.p`
width: 100px;
color: #939393;
font-family: Circular Std;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 24px; 

@media(min-width: 768px){
   width: 170px; 
   font-size: 18px;
}

@media(min-width: 1440px){
   width: 328px; 
   font-size: 18px;
}
`

export const TextName = styled.p`
color: #3D4F5C;
font-family: Circular Std;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;
margin-bottom: 19px;



@media(min-width: 768px){
    font-size: 18px;
}
`

export const TextIcon = styled.p`
color: #939393;

font-family: Circular Std;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin-top: 25px;

@media(min-width: 768px){
    font-size: 18px;
    margin-top: 85px;
}
`

export const LinkSendMail = styled.p`
color: var(--Complementary-Green, #46B8C8);
font-family: Circular Std;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 30px; 
margin-top: 11px;
cursor: pointer;

&:hover{
 color: var(--Primary-Orange, #FB8958);
}

@media(min-width: 768px){
    font-size: 18px;
}
`

export const ItemMedia = styled.li`
cursor: pointer;
}
`

export const LinkSocial = styled.a`
 
`
export const LogoIcon = styled(Icon)`

width:100px;

transition: transform 0.3s ease;

  &:hover {
    animation: ${jumpAnimation} 1s ease-in-out;
  }

  @media(min-width: 768px ){
    width: 178px;
  }
`
