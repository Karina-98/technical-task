import styled, { keyframes } from 'styled-components';

const growOnHoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
width: 107px;
height: 45px;
flex-shrink: 0;
background-color: #fff;
border-radius: 32.5px;
border: 1px solid var(--Complementary-Green, #46B8C8);
color: var(--Complementary-Green, #46B8C8);
text-align: center;
font-family: Circular Std;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 18px; 
transition: transform 0.3s ease; 
cursor: pointer;


&:hover{
    animation: ${growOnHoverAnimation} 0.3s ease forwards;
    background-color: var(--Primary-Orange, #FB8958);
    color: #fff;
    border: none;}
`