import React from 'react';
import { Container, Card, Image, Content, Title, Description, ViewMore } from './styles';

export const CardInfo = ({ title, description, imageURL, handleViewMore }) => (
  <Container>
    <Card>
      <Image src={imageURL} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ViewMore onClick={handleViewMore}>View More</ViewMore>
      </Content>
    </Card>
  </Container>
);
