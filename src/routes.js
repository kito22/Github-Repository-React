import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './pages/Main/index';
import Repository from './pages/Repository/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route
          path="/repository/:repository/:page?"
          exact
          component={Repository}
        />
      </Switch>
    </BrowserRouter>
  );
}
