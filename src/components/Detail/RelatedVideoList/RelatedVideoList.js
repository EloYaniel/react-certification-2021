import React, { useEffect, useState } from 'react';
import { getRelatedVideos } from '../../../services/youtube';
import { Container, Image, Title } from './styles';

export const RelatedVideoList = ({ relatedToVideoId, onVideoChanged }) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getRelatedVideosHandler = async () => {
      const items = await getRelatedVideos(relatedToVideoId);
      setVideoList(items);
    };

    getRelatedVideosHandler();
  }, [relatedToVideoId]);

  return videoList.map((item) => (
    <Container key={item.id} onClick={() => onVideoChanged(item.id)}>
      <Image src={item.imageURL} title={item.title} alt={item.title} />
      <Title>{item.title}</Title>
    </Container>
  ));
};
