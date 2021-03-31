import styled from 'styled-components';

export const Input = styled.input`
  width: 20ch;
  background: none;
  color: currentColor;
  padding: 8px;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  background-color: #aaa;
  margin-left: 20px;
  border: none;
`;

export const Button = styled.button`
  display:block;
  padding: 0.5rem;
  font-size: 1.5rem;
  text-align; center;
  color: #3363ff;
  background-color: #d8e0fd;
  border: none;
  border-radius: 0.4rem;
  transition: 0.2s;
  cursor: pointer;
  letter-spacing: 0.1rem;
  margin: 10px 0;

  &:hover, &:active {
    background-color: #c2cffc;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.h3`
  color: red;
  padding: 10px;
`;
