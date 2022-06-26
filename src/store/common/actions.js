import { OPEN_DRAWER, CLOSE_DRAWER } from './types';

function openDrawer() {
  return {
    type: OPEN_DRAWER,
  };
}

function closeDrawer() {
  return {
    type: CLOSE_DRAWER,
  };
}

export { openDrawer, closeDrawer };
