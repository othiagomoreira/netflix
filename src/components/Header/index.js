import { useEffect, useState } from 'react';

import AvatarImg from '../../assets/img/avatar.png';
import LogoImg from '../../assets/img/logo.svg';

import { Avatar, Container, Logo } from './style';

export const Header = () => {
  const [showBackgroundColor, setShowBackgroundColor] = useState(false);

  const transitionNavBar = () => {
    window.scrollY > 100
      ? setShowBackgroundColor(true)
      : setShowBackgroundColor(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <Container scrollActive={showBackgroundColor}>
      <nav>
        <Logo src={LogoImg} alt="Netflix" />
        <Avatar src={AvatarImg} alt="Avatar" />
      </nav>
    </Container>
  );
};
