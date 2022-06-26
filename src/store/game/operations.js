import { normalize } from 'normalizr';

import { fetchGameConfig } from 'api/requests';
import { AFTER_ANSWER_DELAY } from 'constants/timouts';
import {
  resetGameState,
  initializeGameRequest,
  initializeGameSuccess,
  initializeGameFailure,
  setAnswerId,
  setActiveQuestionId,
  setIsQuestionResultVisible,
  setScore,
  setShouldBlockNavigation,
} from './actions';
import { gameConfigSchema } from './schemas';
import {
  getActiveQuestionCorrectAnswerIds,
  getSelectedAnswerId,
  getSortedQuestionsList,
  getActiveQuestionId,
  getActiveQuestion,
} from './selectors';

function initializeGame() {
  return async (dispatch) => {
    try {
      dispatch(resetGameState());
      dispatch(initializeGameRequest());

      const config = await fetchGameConfig();

      const data = normalize(config, gameConfigSchema);

      const answerIds = Object.keys(data.entities.answers);
      const formattedData = {
        ...data,
        result: { ...data.result, answers: answerIds },
      };

      dispatch(initializeGameSuccess(formattedData));
    } catch (e) {
      dispatch(initializeGameFailure());
    }
  };
}

function goNextQuestion(history) {
  return (dispatch, getState) => {
    const state = getState();
    const questions = getSortedQuestionsList(state);
    const activeQuestionId = getActiveQuestionId(state);

    const indexOfActiveQuestion = questions.findIndex(
      ({ id }) => id === activeQuestionId,
    );
    const indexOfNextQuestion = indexOfActiveQuestion + 1;
    const nextQuestion = questions[indexOfNextQuestion];

    if (indexOfNextQuestion < questions.length && nextQuestion) {
      dispatch(setAnswerId(undefined));
      dispatch(setActiveQuestionId(nextQuestion.id));
    } else {
      dispatch(setShouldBlockNavigation(false));
      history.push('/final');
    }
  };
}

function chooseAnswer(id, history) {
  return (dispatch, getState) => {
    dispatch(setAnswerId(id));

    const state = getState();
    const correctAnswerIds = getActiveQuestionCorrectAnswerIds(state);
    const selectedAnswerId = getSelectedAnswerId(state);
    const activeQuestion = getActiveQuestion(state);

    setTimeout(() => {
      dispatch(setIsQuestionResultVisible(true));
      setTimeout(() => {
        if (correctAnswerIds.includes(selectedAnswerId)) {
          dispatch(setIsQuestionResultVisible(false));
          dispatch(setScore(activeQuestion.prize));
          dispatch(goNextQuestion(history));
        } else {
          dispatch(setShouldBlockNavigation(false));
          history.push('/final');
        }
      }, AFTER_ANSWER_DELAY);
    }, AFTER_ANSWER_DELAY);
  };
}

export { chooseAnswer, initializeGame };
