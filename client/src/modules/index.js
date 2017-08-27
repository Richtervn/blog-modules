import { combineReducers } from 'redux';

import page from 'modules/page';
import forms from 'modules/forms';
import flashGame from 'modules/flashGame';
import profile from 'modules/profile';

import test from 'modules/test';

export default combineReducers({
  page,
  forms,
  flashGame,
  profile,
  test
});

