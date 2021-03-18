import React, { memo } from 'react';
import { Login } from './Login';
import { Menu } from './Menu';
import { SearchBar } from './SearchBar';
import { ThemeToggle } from './ThemeToggle';
import { Header as StyledHeader, RightContent, LeftContent } from './styles';

export const Header = memo(() => (
  <StyledHeader>
    <LeftContent>
      <Menu />
      <SearchBar />
    </LeftContent>
    <RightContent>
      <ThemeToggle />
      <Login />
    </RightContent>
  </StyledHeader>
));
