import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Products from '../pages/Products';
import Cart from '../pages/Cart';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/products" component={Products} isPrivate />
    <Route path="/cart" component={Cart} isPrivate />
  </Switch>
);

export default Routes;
