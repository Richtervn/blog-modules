import { actionCreator } from 'helpers';
import { toastError, toastSuccess } from 'common/Toast';

import React from 'react';
import services from './Projects.services';

const GET_PROJECTS = 'projects/GET_PROJECTS';
const ADD_PROJECT = 'projects/ADD_PROJECT';
const EDIT_PROJECT = 'projects/EDIT_PROJECT';
const DELETE_PROJECT = 'projects/DELETE_PROJECT';
const GET_PROJECT_DETAIL = 'projects/GET_PROJECT_DETAIL';
const UPDATE_SETTING = 'projects/UPDATE_SETTING';
const ADD_PROJECT_ITEM = 'projects/ADD_PROJECT_ITEMT';

const SET_CURRENT_PROJECT = 'projects/SET_CURRENT_PROJECT';
const SET_COLUMN_ON_ADD = 'projects/SET_COLUMN_ON_ADD';
const SET_ITEM_ON_DETAIL = 'projects/SET_ITEM_ON_DETAIL';

const MOVE_CARD_TO_LIST = 'projects/MOVE_CARD_TO_LIST';

export const getProjects = actionCreator(GET_PROJECTS, services.getProjects);
export const getProjectDetail = id => actionCreator(GET_PROJECT_DETAIL, services.getProjectDetail, id)();
export const addProject = formBody => actionCreator(ADD_PROJECT, services.addProject, formBody)();
export const editProject = formBody => actionCreator(EDIT_PROJECT, services.editProject, formBody)();
export const deleteProject = id => actionCreator(DELETE_PROJECT, services.deleteProject, id)();
export const updateSetting = formBody => actionCreator(UPDATE_SETTING, services.updateSetting, formBody)();
export const addProjectItem = formBody => actionCreator(ADD_PROJECT_ITEM, services.addProjectItem, formBody)();

export const setCurrentProject = project => ({ type: SET_CURRENT_PROJECT, project });
export const setColumnOnAdd = column => ({ type: SET_COLUMN_ON_ADD, column });
export const setItemOnDetail = (item, column) => ({ type: SET_ITEM_ON_DETAIL, item, column });

export const moveCardToList = (item, column, oldColumn) => ({ type: MOVE_CARD_TO_LIST, item, column, oldColumn });

const initialState = {
  projects: null,
  currentProject: { Technologies: [''] },
  projectOnBoard: null,
  columnOnAdd: null,
  itemOnDetail: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PROJECTS}_SUCCESS`:
      return { ...state, projects: action.data };
    case `${ADD_PROJECT}_SUCCESS`:
      toastSuccess(() => (
        <p>
          Added <strong>{action.data.name}</strong> project
        </p>
      ));
      state.projects.push(action.data);
      return { ...state, projects: state.projects.slice(0) };
    case `${EDIT_PROJECT}_SUCCESS`:
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
    case `${DELETE_PROJECT}_SUCCESS`:
      state.projects = state.projects.filter(project => project._id !== action.data._id);
      return { ...state, currentProject: { Technologies: [''] }, projects: state.projects.slice(0) };
    case `${GET_PROJECT_DETAIL}_SUCCESS`:
      return { ...state, projectOnBoard: action.data };

    case SET_CURRENT_PROJECT:
      return { ...state, currentProject: { ...action.project } };
    case SET_COLUMN_ON_ADD:
      return { ...state, columnOnAdd: action.column };
    case SET_ITEM_ON_DETAIL:
      return { ...state, itemOnDetail: { item: { ...action.item }, column: { ...action.column } } };

    case `${UPDATE_SETTING}_SUCCESS`:
      toastSuccess('Saved Setting');
      return { ...state, projectOnBoard: { ...state.projectOnBoard, ...action.data } };

    case `${ADD_PROJECT_ITEM}_SUCCESS`:
      return { ...state, projectOnBoard: { ...action.data } };

    case MOVE_CARD_TO_LIST:
      state.projectOnBoard[action.column.key].push(action.item);
      state.projectOnBoard[action.oldColumn.key] = state.projectOnBoard[action.oldColumn.key].filter(
        item => item._id !== action.item._id
      );
      return {
        ...state,
        projectOnBoard: {
          ...state.projectOnBoard,
          [action.column.key]: state.projectOnBoard[action.column.key].slice(0),
          [action.oldColumn.key]: state.projectOnBoard[action.oldColumn.key].slice(0)
        }
      };

    case `${UPDATE_SETTING}_FAIL`:
    case `${GET_PROJECTS}_FAIL`:
    case `${ADD_PROJECT}_FAIL`:
    case `${EDIT_PROJECT}_FAIL`:
    case `${DELETE_PROJECT}_FAIL`:
    case `${ADD_PROJECT_ITEM}_FAIL`:
    case `${GET_PROJECT_DETAIL}_FAIL`:
      toastError(action.error);
      return state;

    default:
      return state;
  }
};
