import styled from 'styled-components';
import { Link as Nav } from 'react-router-dom';

export const Burger = styled.div`
  cursor: pointer;
`;

export const BurgerLine = styled.div`
  width: 20px;
  height: 2px;
  background-color: rgb(225, 225, 225);
  margin: 5px;
`;

export const Sidebar = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #d3d3d3;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

export const Link = styled(Nav)`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;

  &:hover {
    color: #222;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
