import { actionCreator } from 'helpers';
import { toastError, toastSuccess } from 'common/Toast';

import React from 'react';
import services from './Projects.services';

const GET_PROJECTS_START = 'projects/GET_PROJECTS_START';
const GET_PROJECTS_SUCCESS = 'projects/GET_PROJECTS_SUCCESS';
const GET_PROJECTS_FAIL = 'projects/GET_PROJECTS_FAIL';
const ADD_PROJECT_START = 'projects/ADD_PROJECT_START';
const ADD_PROJECT_SUCCESS = 'projects/ADD_PROJECT_SUCCESS';
const ADD_PROJECT_FAIL = 'projects/ADD_PROJECT_FAIL';
const EDIT_PROJECT_START = 'projects/EDIT_PROJECT_START';
const EDIT_PROJECT_SUCCESS = 'projects/EDIT_PROJECT_SUCCESS';
const EDIT_PROJECT_FAIL = 'projects/EDIT_PROJECT_FAIL';
const DELETE_PROJECT_START = 'projects/DELETE_PROJECT_START';
const DELETE_PROJECT_SUCCESS = 'projects/DELETE_PROJECT_SUCCESS';
const DELETE_PROJECT_FAIL = 'projects/DELETE_PROJECT_FAIL';
const GET_PROJECT_DETAIL_START = 'projects/GET_PROJECT_DETAIL_START';
const GET_PROJECT_DETAIL_SUCCESS = 'projects/GET_PROJECT_DETAIL_SUCCESS';
const GET_PROJECT_DETAIL_FAIL = 'projects/GET_PROJECT_DETAIL_FAIL';

const SET_CURRENT_PROJECT = 'projects/SET_CURRENT_PROJECT';
const UNSET_PROJECT_ON_BOARD = 'projects/UNSET_PROJECT_ON_BOARD';

export const getProjects = actionCreator(
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  services.getProjects
);
export const getProjectDetail = id =>
  actionCreator(
    GET_PROJECT_DETAIL_START,
    GET_PROJECT_DETAIL_SUCCESS,
    GET_PROJECT_DETAIL_FAIL,
    services.getProjectDetail,
    id
  )();
export const addProject = formBody =>
  actionCreator(ADD_PROJECT_START, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL, services.addProject, formBody)();
export const editProject = formBody =>
  actionCreator(EDIT_PROJECT_START, EDIT_PROJECT_SUCCESS, EDIT_PROJECT_FAIL, services.editProject, formBody)();
export const deleteProject = id =>
  actionCreator(DELETE_PROJECT_START, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL, services.deleteProject, id)();
export const setCurrentProject = project => ({ type: SET_CURRENT_PROJECT, project });
export const unsetProjectOnBoard = () => ({ type: UNSET_PROJECT_ON_BOARD });

const initialState = {
  projects: null,
  currentProject: { Technologies: [''] },
  projectOnBoard: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return { ...state, projects: action.data };
    case ADD_PROJECT_SUCCESS:
      toastSuccess(() => (
        <p>
          Added <strong>{action.data.name}</strong> project
        </p>
      ));
      state.projects.push(action.data);
      return { ...state, projects: state.projects.slice(0) };
    case EDIT_PROJECT_SUCCESS:
      toastSuccess(() => (
        <p>
          Saved <strong>{action.data.name}</strong> project
        </p>
      ));
      return {
        ...state,
        currentProject: { ...action.data },
        projects: state.projects
          .map(project => {
            if (project._id === action.data._id) {
              return action.data;
            }
            return project;
          })
          .slice(0)
      };
    case DELETE_PROJECT_SUCCESS:
      state.projects = state.projects.filter(project => project._id !== action.data._id);
      return { ...state, currentProject: { Technologies: [''] }, projects: state.projects.slice(0) };
    case GET_PROJECT_DETAIL_SUCCESS:
      return { ...state, projectOnBoard: action.data };

    case SET_CURRENT_PROJECT:
      return { ...state, currentProject: { ...action.project } };
    case UNSET_PROJECT_ON_BOARD:
      return { ...state, projectOnBoard: null };

    case GET_PROJECTS_FAIL:
    case ADD_PROJECT_FAIL:
    case EDIT_PROJECT_FAIL:
    case DELETE_PROJECT_FAIL:
    case GET_PROJECT_DETAIL_FAIL:
      toastError(action.error);
      return state;

    default:
      return state;
  }
};
