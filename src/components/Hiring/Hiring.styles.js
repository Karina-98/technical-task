import styled, { keyframes } from 'styled-components';

const growOnHoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

export const DivHiring = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-bottom: 165px;
padding-top: 140px;
position: relative;
`

export const Text = styled.p`
width: 443px;
color: var(--Primary-Orange, #FB8958);
text-align: center;
font-family: Circular Std;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 30px; 
letter-spacing: -0.24px;
margin-bottom: 30px;
margin-top: 30px;
`

export const Button = styled.button`
width: 243px;
height: 45px;
flex-shrink: 0;
border-radius: 32.5px;
border: none;
background: var(--Complementary-Green, #46B8C8);
color: #FFF;
text-align: center;
font-family: Circular Std;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 18px;
cursor: pointer;
  transition: transform 0.3s ease; 


  &:hover {
color: var(--Complementary-Green, #46B8C8);
background-color: #fff;
border: 1px solid var(--Complementary-Green, #46B8C8);
animation: ${growOnHoverAnimation} 0.3s ease forwards;
  }
`

export const ImageLeft = styled.img`
position: absolute;
left: -120px;
`

export const ImageRight = styled.img`
position: absolute;
right: -120px;
`