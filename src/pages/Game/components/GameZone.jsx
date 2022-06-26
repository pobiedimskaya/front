import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import {
  getActiveQuestion,
  getSortedActiveQuestionAnswers,
  getSelectedAnswerId,
  getActiveQuestionCorrectAnswerIds,
  getIsQuestionResultVisible,
} from 'store/game/selectors';
import { chooseAnswer } from 'store/game/operations';
import { openDrawer } from 'store/common/operations';
import { IconButton, AnswerCell } from 'components';
import { Hamburger } from 'assets/icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 0;
  flex-grow: 1000;
  min-width: 50%;
  padding: 13.3rem 8rem 12.2rem;
  background-color: ${({ theme }) => theme.colors.background.default};
  position: relative;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    padding: 10rem 5rem 9rem;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 13.6rem 0 2.4rem;
  }
`;

const Question = styled.div`
  font-size: 3.2rem;
  line-height: 3.712rem;
  font-weight: 600;
  max-width: 62.4rem;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    text-align: center;
  }
`;

const Answers = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 3.2rem;
  width: 100%;
  max-width: 84rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 2rem;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 8px;
  }
`;

const HamburgerButton = styled(IconButton)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: none;
  z-index: 100;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: inline-block;
  }
`;

const HamburgerIcon = styled(Hamburger)`
  width: 2rem;
  height: 1.8rem;
`;

function GameZone() {
  const history = useHistory();
  const dispatch = useDispatch();
  const question = useSelector(getActiveQuestion);
  const possibleAnswers = useSelector(getSortedActiveQuestionAnswers);
  const correctAnswerIds = useSelector(getActiveQuestionCorrectAnswerIds);
  const isQuestionResultVisible = useSelector(getIsQuestionResultVisible);
  const selectedAnswerId = useSelector(getSelectedAnswerId);

  return (
    <Container>
      <HamburgerButton onClick={() => dispatch(openDrawer())}>
        <HamburgerIcon />
      </HamburgerButton>
      <Question>{question.text}</Question>
      <Answers>
        {possibleAnswers.map(({ id, label, text }) => (
          <AnswerCell
            correct={isQuestionResultVisible && correctAnswerIds.includes(id)}
            wrong={
              isQuestionResultVisible &&
              selectedAnswerId === id &&
              !correctAnswerIds.includes(id)
            }
            selected={selectedAnswerId === id}
            handleClick={() => {
              if (!selectedAnswerId) {
                dispatch(chooseAnswer(id, history));
              }
            }}
            label={label}
            text={text}
            key={id}
          />
        ))}
      </Answers>
    </Container>
  );
}

export default GameZone;
