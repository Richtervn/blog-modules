import { actionCreator } from 'helpers';
import { toastError } from 'common/Toast';

import services from './Projects.services';

const GET_PROJECTS_START = 'projects/GET_PROJECTS_START';
const GET_PROJECTS_SUCCESS = 'projects/GET_PROJECTS_SUCCESS';
const GET_PROJECTS_FAIL = 'projects/GET_PROJECTS_FAIL';

export const getProjects = actionCreator(
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  services.getProjects
);

const initialState = {
  projects: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return { ...state, projects: action.data };

    case GET_PROJECTS_FAIL:
      toastError(action.error);
      return state;

    default:
      return state;
  }
};
