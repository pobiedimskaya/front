import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : theme.colors.common.black40};
`;

const StyledCell = styled.div`
  background-color: ${({ theme }) => theme.colors.common.white};
  padding: 0.8rem 2.4rem;
  text-align: center;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  z-index: 21;
  border-radius: 8px;
  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);

  ${({ theme }) => theme.breakpoints.down('md')} {
    clip-path: polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
  }

  color: ${({ active, disabled, theme }) => {
    if (disabled) {
      return theme.colors.text.disabled;
    }

    if (active) {
      return theme.colors.primary.main;
    }

    return theme.colors.text.primary;
  }};
`;

const FakeBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 22;
  width: 60%;
  clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : theme.colors.common.black40};

  ${({ theme }) => theme.breakpoints.down('md')} {
    clip-path: polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
  }
`;

function PrizeCell({ text, disabled, active }) {
  return (
    <Container>
      <FakeBorder active={active}>
        <StyledCell disabled={disabled} active={active}>
          {text}
        </StyledCell>
      </FakeBorder>
      <Line active={active} />
    </Container>
  );
}

PrizeCell.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
};

export default PrizeCell;
