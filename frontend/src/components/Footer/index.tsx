import React from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/sales.png';
import logoutImg from '../../assets/logoutImg.png';
import { useAuth } from '../../hooks/auth';

const Footer: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <a href="/dashboard">
          <img src={logoImg} alt="" />
        </a>

        <a className="menu-item" href="/" onClick={signOut}>
          <img src={logoutImg} alt="" />
          Sair
        </a>
      </Content>
    </Container>
  );
};

export default Footer;
