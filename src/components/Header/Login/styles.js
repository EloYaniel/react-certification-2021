import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  border: none;
  color: currentColor;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #bdbdbd;
  cursor: pointer;
  margin-left: 20px;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 40px;
`;
