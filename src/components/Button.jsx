import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.common.white};
  padding: 2rem 2.4rem;
  min-width: 29.6rem;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.32rem;
  border-radius: 1.2rem;
  border: none;
  outline: none;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 1.8rem;
    line-height: 2.1rem;
  }

  &&:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  @media (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.light};
    }
  }
`;

export default Button;
