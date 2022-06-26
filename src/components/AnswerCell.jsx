import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function calculateBorderColor({ theme, correct, wrong, selected }) {
  if (correct) {
    return theme.colors.success.main;
  }

  if (wrong) {
    return theme.colors.error.main;
  }

  if (selected) {
    return theme.colors.primary.main;
  }

  return theme.colors.common.black40;
}

function calculateBorderColorOnHover({ theme, correct, wrong }) {
  if (correct) {
    return theme.colors.success.main;
  }

  if (wrong) {
    return theme.colors.error.main;
  }

  return theme.colors.primary.main;
}

function calculateBackgroundColor({ theme, selected, correct, wrong }) {
  if (correct) {
    return theme.colors.success.light;
  }

  if (wrong) {
    return theme.colors.error.light;
  }

  if (selected) {
    return theme.colors.primary.xLight;
  }

  return theme.colors.common.white;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background-color: ${calculateBorderColor};
`;

const StyledCell = styled.div`
  background-color: ${calculateBackgroundColor};
  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  z-index: 21;
  cursor: pointer;
  position: relative;
  padding: 2.45rem 3.2rem;
  border-radius: 8px;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    padding: 2rem 3rem;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    clip-path: polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 2rem 2.4rem;
  }
`;

const AnswerSymbol = styled.span`
  color: ${({ theme }) => theme.colors.primary.main};
  margin-right: 8px;
`;

const FakeBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 22;
  width: 90%;
  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
  background-color: ${calculateBorderColor};

  ${({ theme }) => theme.breakpoints.down('md')} {
    clip-path: polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
  }

  &:hover {
    background-color: ${calculateBorderColorOnHover};

    & + ${Line} {
      background-color: ${calculateBorderColorOnHover};
    }
  }
`;

function AnswerCell({ correct, wrong, selected, handleClick, label, text }) {
  return (
    <Container>
      <FakeBorder correct={correct} wrong={wrong} selected={selected}>
        <StyledCell
          onClick={handleClick}
          correct={correct}
          wrong={wrong}
          selected={selected}
        >
          <AnswerSymbol>{label}</AnswerSymbol>
          {text}
        </StyledCell>
      </FakeBorder>
      <Line correct={correct} wrong={wrong} selected={selected} />
    </Container>
  );
}

AnswerCell.propTypes = {
  correct: PropTypes.bool.isRequired,
  wrong: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AnswerCell;
