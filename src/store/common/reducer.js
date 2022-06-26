import createReducer from 'utils/redux/createReducer';

import { OPEN_DRAWER, CLOSE_DRAWER } from './types';

const initialState = {
  isDrawerOpen: false,
};

function openDrawer(state) {
  return { ...state, isDrawerOpen: true };
}

function closeDrawer(state) {
  return { ...state, isDrawerOpen: false };
}

const handlers = {
  [OPEN_DRAWER]: openDrawer,
  [CLOSE_DRAWER]: closeDrawer,
};

export default createReducer(initialState, handlers);
