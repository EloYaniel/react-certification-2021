import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Burger, BurgerLine, CloseButton, Link, Sidebar } from './styles';
import { Context as GlobalContext } from '../../../contexts/GlobalContext';

export const Menu = () => {
  const {
    state: { isLoggedIn },
  } = useContext(GlobalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Burger onClick={handleToggleMenu}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </Burger>
      {isMenuOpen && (
        <Sidebar>
          <CloseButton onClick={handleToggleMenu}>&times;</CloseButton>
          <Link to="/">HOME</Link>
          {isLoggedIn && <Link to="/favorites">FAVORITES</Link>}
        </Sidebar>
      )}
    </>
  );
};
