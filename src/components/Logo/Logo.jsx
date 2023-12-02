import { Link } from 'react-router-dom';
import {ReactComponent as Icon} from '../../assets/icon/startupz.svg'
import { AnimationLogo } from './Logo.styled';


export const Logo = () => {
  return (
    
      <Link to="">
        <AnimationLogo><Icon/></AnimationLogo>
      </Link>
    
  );
};
