import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.textColor};
`;
