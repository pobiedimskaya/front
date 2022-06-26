import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  getSortedQuestionsList,
  getActiveQuestionId,
  getAnsweredQuestionsIds,
} from 'store/game/selectors';
import { closeDrawer } from 'store/common/operations';
import { getIsDrawerOpen } from 'store/common/selectors';
import { Cross } from 'assets/icons';
import { IconButton, PrizeCell } from 'components';

const Container = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background.default};
  overflow-x: hidden;
  padding-top: 6.4rem;
  padding-bottom: 3.2rem;
  transition: 0.2s;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: ${({ isOpen }) => (isOpen ? '100%' : 0)};
  }
`;

const Prizes = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CrossButton = styled(IconButton)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: none;
  z-index: 1100;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: inline-block;
  }
`;

const CrossIcon = styled(Cross)`
  width: 1.6rem;
  height: 1.6rem;
`;

function Drawer() {
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsDrawerOpen);
  const questions = useSelector(getSortedQuestionsList);
  const activeQuestionId = useSelector(getActiveQuestionId);
  const answeredQuestionsIds = useSelector(getAnsweredQuestionsIds);

  return (
    <Container isOpen={isOpen}>
      <CrossButton onClick={() => dispatch(closeDrawer())}>
        <CrossIcon />
      </CrossButton>
      <Prizes>
        {[...questions].reverse().map(({ prize, id }) => (
          <PrizeCell
            key={id}
            disabled={answeredQuestionsIds.includes(id)}
            active={id === activeQuestionId}
            text={prize}
          />
        ))}
      </Prizes>
    </Container>
  );
}

export default Drawer;
