import { Link } from 'react-router-dom';
import {ReactComponent as Icon} from '../../assets/icon/startupz.svg'


export const Logo = () => {
  return (
    <>
      <Link to=""><Icon/>
        {/* <Image
          href="/src/assets/images/header/startupz_header.jpg"
          alt="header-logo"
          width={199.486}
          height={47.848}
        /> */}
      </Link>
    </>
  );
};
