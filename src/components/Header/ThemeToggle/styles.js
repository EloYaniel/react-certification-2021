import styled from 'styled-components';

export const Container = styled.label`
  --width: 30px;
  --height: calc(var(--width) / 2);
  --border-radius: calc(var(--height) / 2);
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  & {
    display: none;
  }
  &:checked ~ div {
    background: #009578;
  }
  &:checked ~ div::after {
    transform: translateX(15px);
  }
`;

export const Toggle = styled.div`
  & {
    position: relative;
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
    background: #dddddd;
    transition: background 0.2s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: var(--height);
    width: var(--height);
    background: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: var(--border-radius);
    transition: transform 0.2s;
  }
`;

export const ToggleText = styled.span`
  margin-left: 8px;
`;
