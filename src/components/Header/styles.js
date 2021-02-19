import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #1c5476;
  width: 100%;
  min-height: 8vh;
  z-index: 1;
  color: #fff;
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: right;
  padding-right: 10px;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: left;
  width: 50%;
  padding-left: 10px;
`;
