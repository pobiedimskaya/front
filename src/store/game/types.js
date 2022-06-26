const prefix = '[Game]';

const RESET_GAME_STATE = `${prefix} Reset Game State`;

const INITIALIZE_GAME_REQUEST = `${prefix} Initialize Game Request`;
const INITIALIZE_GAME_SUCCESS = `${prefix} Initialize Game Success`;
const INITIALIZE_GAME_FAILURE = `${prefix} Initialize Game Failure`;

const SET_ANSWER_ID = `${prefix} Set Answer Id`;
const SET_ACTIVE_QUESTION_ID = `${prefix} Set Active Question Id`;
const SET_IS_QUESTION_RESULT_VISIBLE = `${prefix} Set Show Correct Answer`;
const SET_SCORE = `${prefix} Set Score`;

const SET_SHOULD_BLOCK_NAVIGATION = `${prefix} Set Should Block Navigation`;

export {
  RESET_GAME_STATE,
  INITIALIZE_GAME_REQUEST,
  INITIALIZE_GAME_SUCCESS,
  INITIALIZE_GAME_FAILURE,
  SET_ANSWER_ID,
  SET_ACTIVE_QUESTION_ID,
  SET_IS_QUESTION_RESULT_VISIBLE,
  SET_SCORE,
  SET_SHOULD_BLOCK_NAVIGATION,
};
