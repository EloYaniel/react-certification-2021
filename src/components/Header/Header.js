import React from 'react';
import { Login } from './Login';
import { Menu } from './Menu';
import { SearchBar } from './SearchBar';
import { ThemeToggle } from './ThemeToggle';
import { Header as StyledHeader, RightContent, LeftContent } from './styles';

export const Header = () => (
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
);
