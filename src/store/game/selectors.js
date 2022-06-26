import { createSelector } from 'reselect';
import takeWhile from 'lodash/takeWhile';

import { sortByOrder } from 'utils/helpers';

const getQuestionsById = (state) => state.game.questions.byId;
const getQuestionsIds = (state) => state.game.questions.allIds;
const getActiveQuestionId = (state) => state.game.activeQuestionId;
const getAnswersById = (state) => state.game.answers.byId;
const getIsConfigLoading = (state) => state.game.isLoading;
const getSelectedAnswerId = (state) => state.game.selectedAnswerId;
const getIsQuestionResultVisible = (state) =>
  state.game.isQuestionResultVisible;
const getScore = (state) => state.game.score;
const getShouldBlockNavigation = (state) => state.game.shouldBlockNavigation;

const getSortedQuestionsList = createSelector(
  getQuestionsById,
  getQuestionsIds,
  (questionsById, questionsIds) =>
    sortByOrder(questionsIds.map((id) => questionsById[id])),
);

const getActiveQuestion = createSelector(
  getQuestionsById,
  getActiveQuestionId,
  (questionsById, activeQuestionId) => questionsById[activeQuestionId],
);

const getSortedActiveQuestionAnswers = createSelector(
  getActiveQuestion,
  getAnswersById,
  (activeQuestion, answersById) =>
    sortByOrder(activeQuestion.answers.map((id) => answersById[id])),
);

const getActiveQuestionCorrectAnswerIds = createSelector(
  getActiveQuestion,
  (activeQuestion) => activeQuestion.correctAnswerIds,
);

const getAnsweredQuestionsIds = createSelector(
  getSortedQuestionsList,
  getActiveQuestionId,
  (questions, activeQuestionID) => {
    return takeWhile(
      questions.map(({ id }) => id),
      (id) => id !== activeQuestionID,
    );
  },
);

export {
  getActiveQuestion,
  getSelectedAnswerId,
  getIsConfigLoading,
  getSortedActiveQuestionAnswers,
  getActiveQuestionCorrectAnswerIds,
  getActiveQuestionId,
  getSortedQuestionsList,
  getAnsweredQuestionsIds,
  getIsQuestionResultVisible,
  getScore,
  getShouldBlockNavigation,
};
