import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  width: 114rem;
  grid-gap: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: start;

  @media only screen and (max-width: 60em) {
    & {
      grid-gap: 3rem;
    }
  }
`;

export const Title = styled.h1`
  margin: 4rem;
  font-size: 4rem;
  width: 100%;
  text-align: center;
`;
