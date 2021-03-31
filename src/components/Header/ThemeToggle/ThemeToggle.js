import React, { useContext } from 'react';
import { Container, Checkbox, Toggle, ToggleText } from './styles';
import { Context as GlobalContext, TOGGLE_THEME_ACTION_TYPE } from '../../../contexts';

export const ThemeToggle = () => {
  const {
    state: { isDarkTheme },
    dispatch,
  } = useContext(GlobalContext);

  const handleToggleTheme = () => {
    dispatch({ type: TOGGLE_THEME_ACTION_TYPE });
  };

  return (
    <Container>
      <Checkbox type="checkbox" value={isDarkTheme} onChange={handleToggleTheme} />
      <Toggle />
      <ToggleText>Dark mode</ToggleText>
    </Container>
  );
};
