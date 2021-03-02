import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.5);
  }
`;

export const Card = styled.div``;

export const Content = styled.div`
  padding: 3rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: #0d0d0d;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  line-height: 1.7;
  color: #3d3d3d;
  margin-bottom: 2.5rem;
`;

export const ViewMore = styled.button`
  display:block;
  width: 100%;
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

export const Image = styled.img`
  display: block;
  width: 100%;
  heigth: 20rem;
  object-fit: cover;
`;
