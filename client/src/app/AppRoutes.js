import React from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import { Page } from 'common/Layout';

import { NotFound } from 'pages/NotFound';
import { MangasReading } from 'pages/Collections/MangasReading';
import { Music } from 'pages/Collections/Music';
import { GamingHistory } from 'pages/Collections/GamingHistory';
import { FlashGames } from 'pages/FlashGames';
import { Home } from 'pages/Home';
import { ContentMirror } from 'pages/Tools/ContentMirror';

const AppRoutes = () => (
  <Page>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home/projects" />} />
      <Route path="/home/:tab/:subPage?" component={Home} />
      <Route exact path="/mangas_reading" component={MangasReading} />
      <Route exact path="/music" component={Music} />
      <Route path="/content_mirror/:table?/:record?" component={ContentMirror} />
      <Route path="/gaming_history/:game?/:tab?/:subPage?" component={GamingHistory} />
      <Route path="/flash_games/:name" component={FlashGames} />
      <Route path="/404" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Page>
);

export default withRouter(AppRoutes);
