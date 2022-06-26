import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  getSortedQuestionsList,
  getActiveQuestionId,
  getAnsweredQuestionsIds,
} from 'store/game/selectors';
import { PrizeCell } from 'components';

const Container = styled.div`
  flex-basis: 37.6rem;
  flex-grow: 1;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    flex-basis: 30rem;
  }
`;

const Prizes = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

function PrizesZone() {
  const questions = useSelector(getSortedQuestionsList);
  const activeQuestionId = useSelector(getActiveQuestionId);
  const answeredQuestionsIds = useSelector(getAnsweredQuestionsIds);

  return (
    <Container>
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

export default PrizesZone;
