import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Container } from './styles';
import Main from '../pages/Main';
import DefaultLayout from '../pages/layouts/Default';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout>
          <Route path="/" exact component={Main} />
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
