import styled, { keyframes } from 'styled-components';

const growOnHoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

export const ButtonWork = styled.button`
width: 185px;
height: 45px;
flex-shrink: 0;
flex-direction: column;
justify-content: center;
padding: 15px 34px;
color: var(--Complementary-Green, #46B8C8);
background-color: transparent;
text-align: center;
font-family: Circular Std;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 100px;
border-radius: 32.5px;
border: 1px solid var(--Complementary-Green, #46B8C8);
cursor: pointer;
transition: transform 0.3s ease; 


&:hover{
    animation: ${growOnHoverAnimation} 0.3s ease forwards;
    background-color: #46B8C8;
    color: #FFF;
}
`
export const TextHeader = styled.p`
color: #3D4F5C;
font-family: Circular Std;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
letter-spacing: -0.18px;
margin-right: 40px;
cursor: pointer;

&:hover{
    color: var(--Primary-Orange, #FB8958);
}
`

export const DivNavigation = styled.div`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
`