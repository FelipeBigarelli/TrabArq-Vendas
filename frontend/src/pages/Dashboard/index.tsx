import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import petBackgroundImg from '../../assets/pet-dashboard-background-2.png';

import { Container, Content, Welcome } from './styles';

import api from '../../services/api';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Welcome>
          <h1>Seja bem vindo!</h1>

          <img src={petBackgroundImg} alt="Animals Background" />
        </Welcome>
      </Content>

      <Footer />
    </Container>
  );
};

export default Dashboard;
