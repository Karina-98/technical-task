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

export const ContainerAboutUs = styled.div`
  
  display: flex;
  margin-bottom: 79px;
  
`;

export const ContainerUs = styled.div`
padding-top: 143px;
padding-bottom: 157px;
`

export const DivText = styled.div`
  margin-top: 32px;
  margin-right: 212px;
`;

export const Div = styled.div``;

export const Image = styled.img`
  width: 75px;
  height: 88px;

  animation: ${pulseAnimation} 1.5s ease-in-out infinite;
`;

export const List = styled.ul`
  display: flex;
  li:not(:last-child) {
    margin-right: 80px;
 }
`;

export const Item = styled.li`
  display: flex;

  flex-direction: column;
  
`;

export const TextNumber = styled.p`
  color: var(--Primary-Orange, #fb8958);
  font-family: Circular Std;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.3px;
  margin-bottom: 19px;
`;

export const Text = styled.p`
  color: #3d4f5c;
  width: 320px;
  height: 114px;
  font-family: Circular Std;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: -0.3px;
  margin-top: 26px;
`;
