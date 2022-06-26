import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import logo from 'assets/images/hand.png';

import { getScore } from 'store/game/selectors';
import { Button, H1 } from 'components';

const Container = styled.div`
  height: 100vh;
  min-height: 40rem;
  background: ${({ theme }) => theme.colors.background.default};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 0 6rem;
    min-height: 60rem;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 10rem 2.5rem 7.5rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const Image = styled.img`
  margin-right: 3.2rem;
  width: 50%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 2.4rem;
    margin-right: 0;
    width: 70%;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: 4rem;
    margin-right: 0;
    width: 90%;
  }
`;

const TextContent = styled.div`
  width: 50%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 70%;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    align-items: stretch;
    justify-content: space-between;
    flex: 1;
  }
`;

const TotalText = styled.span`
  font-size: 3.2rem;
  line-height: 3.712rem;
  font-weight: 600;
  opacity: 0.5;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

function Final() {
  const score = useSelector(getScore);

  if (score === undefined) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <ContentContainer>
        <Image src={logo} alt="" />
        <TextContent>
          <div>
            <TotalText>Total score:</TotalText>
            <H1 as="div">{score} earned</H1>
          </div>
          <Button as={Link} to="/game">
            Try Again
          </Button>
        </TextContent>
      </ContentContainer>
    </Container>
  );
}

export default Final;
