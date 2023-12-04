import styled, { keyframes } from 'styled-components';


const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const DivTitle = styled.div`
margin-bottom: 117px;
position: relative;



`
export const ContainerValue = styled.div`

padding-top: 135px;
padding-bottom: 156px;

@media(min-width: 768px){
   padding-top: 172px;
  padding-bottom: 196px;
}
`
export const Image = styled.img`
position: absolute;
right: 0;
top: 55px;

@media(min-width: 768px){
   top: 0;
}

animation: ${pulseAnimation} 1.5s ease-in-out infinite;
`

export const List = styled.ul`
display: flex;
flex-wrap: wrap;

 li:not(:last-child) {
    margin-bottom: 50px; 
 }
 @media(min-width: 1440px){
   li:not(:last-child) {
    margin-right: 74px; 
    margin-bottom: 0;
 }
 }
`

export const Item = styled.li`

`

export const ItemTextNumber = styled.p`
color: var(--Primary-Orange, #FB8958);
font-family: Circular Std;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 30px; 
letter-spacing: -0.3px;
margin-bottom: 30px;
`

export const ItemText = styled.p`
width: 351px;
color: #3D4F5C;
font-family: Circular Std;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 38px; 
letter-spacing: -0.3px;
margin-top: 25px;

@media(min-width: 768px){
width: 641px;
 }
`

export const ItemText2 = styled.p`

color: #3D4F5C;
font-family: Circular Std;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 38px; 
letter-spacing: -0.3px;
margin-top: 25px;

@media(min-width: 768px){
   width: 351px;
}
`