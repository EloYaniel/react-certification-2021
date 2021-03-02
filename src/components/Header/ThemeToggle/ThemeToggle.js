import React from 'react';

import { Container, Checkbox, Toggle, ToggleText } from './styles';

export const ThemeToggle = () => (
  <Container>
    <Checkbox type="checkbox" />
    <Toggle />
    <ToggleText>Dark mode</ToggleText>
  </Container>
);
