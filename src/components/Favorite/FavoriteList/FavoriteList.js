import React, { useEffect, useState } from 'react';
import { getFavorites } from '../../../services/favorites/favorites';
import { getFavoriteVideos } from '../../../services/youtube/youtube';
import { CardContainer, Title } from './styles';
import { CardInfo } from './CardInfo';

export const FavoriteList = () => {
  const [youtubeInfoList, setYoutubeInfoList] = useState([]);

  useEffect(() => {
    const videoIDs = getFavorites();
    getFavoriteVideos(videoIDs).then((videos) => {
      setYoutubeInfoList(videos);
    });
  }, []);

  return (
    <>
      <Title>My favorites</Title>
      <CardContainer>
        {youtubeInfoList.map((item) => (
          <CardInfo
            key={item.id}
            videoID={item.id}
            title={item.title}
            description={item.description}
            imageURL={item.imageURL}
          />
        ))}
      </CardContainer>
    </>
  );
};
