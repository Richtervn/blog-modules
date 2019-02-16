import React from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import { Page } from 'common/Layout';

import { NotFound } from 'pages/NotFound';

import { MangasReading } from 'pages/Collections/MangasReading';
import { Music } from 'pages/Collections/Music';
import { GamingHistory } from 'pages/Collections/GamingHistory';
import { Gallery } from 'pages/Collections/Gallery';

import { FlashGames } from 'pages/FlashGames';
import { Home } from 'pages/Home';

import { ComponentsViewer } from 'pages/Tools/ComponentsViewer';
import { ContentMirror } from 'pages/Tools/ContentMirror';
import { IconChooser } from 'pages/Tools/IconChooser';
import { CodePlayground } from 'pages/Tools/CodePlayground';

import { Starcraft } from 'pages/Games/Starcraft';
import { DiabloII } from 'pages/Games/DiabloII';
import { YugiohPoc } from 'pages/Games/YugiohPoc';
import { MuOnline } from 'pages/Games/MuOnline';

import { EndedManga } from 'pages/Archived/EndedManga';
import { Accounts } from 'pages/Archived/Accounts';

import { AppMenu } from 'pages/Setting/AppMenu';
import { DayEvents } from 'pages/Setting/DayEvents';

import { Darksteam97d99i } from 'pages/MuOnline/Darksteam97d99i';

import { Guideline } from 'pages/Documentations/Guideline';

import { MangaNews } from 'pages/Subscribe/MangaNews';
import { Rss } from 'pages/Subscribe/Rss';
import { Weather } from 'pages/Subscribe/Weather';

const AppRoutes = () => (
  <Page>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home/projects" />} />
      <Route exact path="/accounts" component={Accounts} />
      <Route exact path="/app_menu" component={AppMenu} />
      <Route exact path="/code_playground" component={CodePlayground} />
      <Route exact path="/components_viewer" component={ComponentsViewer} />
      <Route exact path="/day_events" component={DayEvents} />
      <Route exact path="/ended_manga" component={EndedManga} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/guideline" component={Guideline} />
      <Route exact path="/icon_chooser" component={IconChooser} />
      <Route exact path="/manga_news" component={MangaNews} />
      <Route exact path="/mangas_reading" component={MangasReading} />
      <Route exact path="/music" component={Music} />
      <Route exact path="/rss" render={() => <Redirect to="/rss/feeds" />} />
      <Route exact path="/weather" component={Weather} />
      <Route exact path="/yugioh!_poc" component={YugiohPoc} />

      <Route path="/content_mirror/:table?/:record?" component={ContentMirror} />
      <Route path="/darksteam_97d99i/:tab?/:page?" component={Darksteam97d99i} />
      <Route path="/diablo_ii/:tab?/:subPage?" component={DiabloII} />
      <Route path="/flash_games/:name" component={FlashGames} />
      <Route path="/gaming_history/:game?/:tab?/:subPage?" component={GamingHistory} />
      <Route path="/home/:tab/:subPage?" component={Home} />
      <Route path="/mu_online/:tab?/:subPage?" component={MuOnline} />
      <Route path="/rss/:tab?" component={Rss} />
      <Route path="/starcraft_broodwar/:tab?/:subPage?" component={Starcraft} />
      <Route path="/404" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Page>
);

export default withRouter(AppRoutes);
