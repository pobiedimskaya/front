import {
  RESET_GAME_STATE,
  INITIALIZE_GAME_REQUEST,
  INITIALIZE_GAME_SUCCESS,
  INITIALIZE_GAME_FAILURE,
  SET_ANSWER_ID,
  SET_ACTIVE_QUESTION_ID,
  SET_IS_QUESTION_RESULT_VISIBLE,
  SET_SCORE,
  SET_SHOULD_BLOCK_NAVIGATION,
} from './types';

function resetGameState() {
  return {
    type: RESET_GAME_STATE,
  };
}

function initializeGameRequest() {
  return {
    type: INITIALIZE_GAME_REQUEST,
  };
}

function initializeGameSuccess(data) {
  return {
    type: INITIALIZE_GAME_SUCCESS,
    payload: {
      data,
    },
  };
}

function initializeGameFailure() {
  return {
    type: INITIALIZE_GAME_FAILURE,
  };
}

function setAnswerId(id) {
  return {
    type: SET_ANSWER_ID,
    payload: { id },
  };
}

function setActiveQuestionId(id) {
  return {
    type: SET_ACTIVE_QUESTION_ID,
    payload: { id },
  };
}

function setIsQuestionResultVisible(isVisible) {
  return {
    type: SET_IS_QUESTION_RESULT_VISIBLE,
    payload: { isVisible },
  };
}

function setScore(score) {
  return {
    type: SET_SCORE,
    payload: { score },
  };
}

function setShouldBlockNavigation(shouldBlock) {
  return {
    type: SET_SHOULD_BLOCK_NAVIGATION,
    payload: { shouldBlock },
  };
}

export {
  resetGameState,
  initializeGameRequest,
  initializeGameSuccess,
  initializeGameFailure,
  setAnswerId,
  setActiveQuestionId,
  setIsQuestionResultVisible,
  setScore,
  setShouldBlockNavigation,
};
