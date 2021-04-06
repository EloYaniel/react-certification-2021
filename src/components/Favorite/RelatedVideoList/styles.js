import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin: 0 0 15px 0;
`;

export const Image = styled.img``;

export const Title = styled.h3`
  margin-left: 10px;
  color: ${(props) => props.theme.textColor};
`;
