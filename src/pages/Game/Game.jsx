import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Prompt } from 'react-router-dom';
import { useBeforeunload } from 'react-beforeunload';

import { initializeGame } from 'store/game/operations';
import { Drawer } from 'layout';
import {
  getIsConfigLoading,
  getShouldBlockNavigation,
} from 'store/game/selectors';
import { GameZone, PrizesZone } from './components';

const Container = styled.div`
  height: 100vh;
  min-height: 65rem;
  display: flex;
`;

function Game() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsConfigLoading);
  const shouldBlockNavigation = useSelector(getShouldBlockNavigation);

  // hooks
  useEffect(() => {
    dispatch(initializeGame());
  }, []);

  useBeforeunload(() => "You'll lose your progress!");

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      <Drawer />
      <Prompt
        when={shouldBlockNavigation}
        message="You'll lose your progress!"
      />
      <GameZone />
      <PrizesZone />
    </Container>
  );
}

export default Game;
