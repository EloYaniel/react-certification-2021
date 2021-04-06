import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.5);
  }
  width: 20%;
  margin: 15px;
`;

export const Card = styled.div``;

export const Content = styled.div`
  padding: 0.3rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 100;
  color: ${(props) => props.theme.cardTitleColor};
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.cardDescriptionColor};
  margin-bottom: 2.5rem;
`;

export const ViewMore = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem;
  font-size: 1.4rem;
  text-align: center;
  color: #3363ff;
  background-color: #d8e0fd;
  border: none;
  border-radius: 0.4rem;
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;
  margin: 10px;

  &:hover,
  &:active {
    background-color: #c2cffc;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  heigth: 20rem;
  object-fit: cover;
`;
