import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import { Page } from 'common/Layout';

import { NotFound } from 'pages/NotFound';
import { MangasReading } from 'pages/Collections/MangasReading';
import { FlashGames } from 'pages/FlashGames';
import { Home } from 'pages/Home';

const AppRoutes = () => (
  <Page>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/mangas_reading" component={MangasReading} />
      <Route path="/flash_games/:name" component={FlashGames} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Page>
);

export default withRouter(AppRoutes);
