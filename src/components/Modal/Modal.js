/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router';
import { Container, BodyContainer, Button } from './styles';

export const Modal = ({ children }) => {
  const history = useHistory();

  const handlebBack = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <Container>
      <BodyContainer>
        {children}
        <Button type="button" onClick={handlebBack}>
          Close
        </Button>
      </BodyContainer>
    </Container>
  );
};
