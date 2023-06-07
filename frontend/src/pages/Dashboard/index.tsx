import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content, Welcome } from './styles';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Header />

      <Content>
        <Welcome>
          <br />
          <h1>
            Seja bem vindo {user.name}!
            <br />
          </h1>
        </Welcome>
      </Content>

      <Footer />
    </Container>
  );
};

export default Dashboard;
