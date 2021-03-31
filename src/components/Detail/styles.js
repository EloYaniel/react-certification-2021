import styled from 'styled-components';

export const FavButton = styled.button`
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
  flex-direction: row;
`;

export const MainContainer = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 30px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 10px;
  color: ${(props) => props.theme.textColor};
`;

export const Subtitle = styled.h4`
  color: ${(props) => props.theme.textColor};
`;
