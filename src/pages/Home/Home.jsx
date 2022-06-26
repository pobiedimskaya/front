import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from 'assets/images/hand.png';

import { Button, H1 } from 'components';

const Container = styled.div`
  height: 100vh;
  min-height: 40rem;
  background: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.common.white} 50%,
    ${({ theme }) => theme.colors.primary.xLight} 50%
  );
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

const ImageContainer = styled.div`
  margin-right: 3.2rem;
  width: 50%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 2.4rem;
    margin-right: 0;
    width: 70%;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: 2.4rem;
    margin-right: 0;
    width: 90%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
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

function Home() {
  return (
    <Container>
      <ContentContainer>
        <ImageContainer>
          <Image src={logo} alt="Millionaire" />
        </ImageContainer>
        <TextContent>
          <H1>Who wants to be a millionaire?</H1>
          <Button as={Link} to="/game">
            Start
          </Button>
        </TextContent>
      </ContentContainer>
    </Container>
  );
}

export default Home;
