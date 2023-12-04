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

width: 80px;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    padding: 5px 5px;
    color: var(--Complementary-Green, #46B8C8);
    background-color: transparent;
    text-align: center;
    font-family: Circular Std;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    border-radius: 32.5px;
    border: 1px solid var(--Complementary-Green, #46B8C8);
    cursor: pointer;
    transition: transform 0.3s ease;

    @media(min-width: 768px){
        width: 130px;
height: 45px;
padding: 5px 15px;
font-size: 14px;
font-weight: 700;
line-height: 100px;
    }

    @media(min-width: 1440px){
 width: 185px;
height: 45px;
padding: 15px 34px;
font-size: 18px;
font-weight: 700;
line-height: 100px;
    }
&:hover{
    animation: ${growOnHoverAnimation} 0.3s ease forwards;
    background-color: #46B8C8;
    color: #FFF;
}
`
export const TextHeader = styled.p`
color: #3D4F5C;
    font-family: Circular Std;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.18px;
    margin-right: 10px;
    cursor: pointer;
@media(min-width: 768px){
    font-size: 18px;
    margin-right: 40px;
}

@media(min-width:1440px){
margin-right: 40px;
}

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