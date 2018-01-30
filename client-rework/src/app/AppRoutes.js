import React from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import { Page } from 'common/Layout';

import { NotFound } from 'pages/NotFound';
import { MangasReading } from 'pages/Collections/MangasReading';
import { FlashGames } from 'pages/FlashGames';
import { Home } from 'pages/Home';

const AppRoutes = () => (
  <Switch>
    <Page>
      <Route exact path="/" render={() => <Redirect to="/home/projects" />} />
      <Route path="/home/:tab/:subPage?" component={Home} />
      <Route exact path="/mangas_reading" component={MangasReading} />
      <Route path="/flash_games/:name" component={FlashGames} />
      <Route path="/404" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Page>
  </Switch>
);

export default withRouter(AppRoutes);
