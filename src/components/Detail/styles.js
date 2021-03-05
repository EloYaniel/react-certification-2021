import styled from 'styled-components';

export const BackButton = styled.button`
  display:block;
  padding: 1.5rem;
  font-size: 2rem;
  text-align; center;
  color: #3363ff;
  background-color: #d8e0fd;
  border: none;
  border-radius: 0.4rem;
  transition: 0.2s;
  cursor: pointer;
  letter-spacing: 0.1rem;

  &:hover, &:active {
    background-color: #c2cffc;
  }
`;
