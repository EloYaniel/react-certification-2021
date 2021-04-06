import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  margin: 4rem;
  font-size: 4rem;
  width: 100%;
  text-align: center;
`;
