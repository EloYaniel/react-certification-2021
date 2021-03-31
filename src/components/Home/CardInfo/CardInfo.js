import React from 'react';
import { Container, Card, Image, Content, Title, Description, ViewMore } from './styles';

export const CardInfo = ({ title, description, imageURL, videoID }) => (
  <Container>
    <Card>
      <Image src={imageURL} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      <ViewMore to={`/detail/${videoID}`}>View More</ViewMore>
    </Card>
  </Container>
);
