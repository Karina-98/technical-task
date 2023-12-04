import styled, { keyframes } from 'styled-components';
import {ReactComponent as Icon} from '../../assets/icon/startupz.svg'

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

export const Svg = styled(Icon)`
width: 100px;

@media(min-width: 768px){
        width: 200px;
    height: 49px;
}
`

