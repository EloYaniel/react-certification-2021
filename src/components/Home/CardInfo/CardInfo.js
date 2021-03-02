import React from 'react';
import { Container, Card, Image, Content, Title, Description, ViewMore } from './styles';

export const CardInfo = ({ title, description, imageURL }) => (
  <Container>
    <Card>
      <Image src={imageURL} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ViewMore>View More</ViewMore>
      </Content>
    </Card>
  </Container>
);
