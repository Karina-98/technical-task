import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(40%, 0);
  100% {
    transform: translate(0, 0);
  }
`;


export const AnimationLogo = styled.div`
animation: ${slideIn} 3s linear;
`;

