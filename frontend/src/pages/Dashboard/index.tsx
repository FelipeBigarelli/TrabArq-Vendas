import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content, Welcome, Orders, OrdersContent } from './styles';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

interface IOrderDTO {
  user_id: string;
  products: [];
}

const Dashboard: React.FC = () => {
  const [orders, setOrders] = useState<IOrderDTO[]>([]);
  const { user } = useAuth();

  const userOrders = useCallback(async (id: number) => {
    const getOrders = await api.get(`orders/${id}`);
  }, []);

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

        <Orders>
          <h1>Seus pedidos</h1>

          <OrdersContent />
        </Orders>
      </Content>

      <Footer />
    </Container>
  );
};

export default Dashboard;
