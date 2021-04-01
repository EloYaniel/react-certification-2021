import React, { useEffect, useState } from 'react';
import { getFavorites } from '../../../services/favorites';
import { getVideoInfo } from '../../../services/youtube';
import { Container, Image, Title } from './styles';

export const RelatedFavoriteVideoList = ({ relatedToVideoId, onVideoChanged }) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const videoIDs = getFavorites();
    videoIDs.splice(videoIDs.indexOf(relatedToVideoId), 1);
    getVideoInfo(videoIDs).then((v) => setVideoList(v));
  }, [relatedToVideoId]);

  return videoList.map((item) => (
    <Container key={item.id} onClick={() => onVideoChanged(item.id)}>
      <Image src={item.imageURL} title={item.title} alt={item.title} />
      <Title>{item.title}</Title>
    </Container>
  ));
};
