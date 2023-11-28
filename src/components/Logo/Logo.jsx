import { Link } from 'react-router-dom';
import { Image } from './Logo.styled';

export const Logo = () => {
  return (
    <>
      <Link to="">
        <Image
          href="/src/assets/images/header/startupz_header.jpg"
          alt="header-logo"
          width={199.486}
          height={47.848}
        />
      </Link>
    </>
  );
};
