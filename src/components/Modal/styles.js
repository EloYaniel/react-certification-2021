import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.15);
`;

export const BodyContainer = styled.div`
  position: absolute;
  background: ${(props) => props.theme.cardColor};
  top: 50%;
  left: 30%;
  right: 30%;
  padding: 15px;
  border: 2px solid #444;
`;

export const Button = styled.button`
  display:block;
  float: right;
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
