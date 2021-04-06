import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from '../Shared/VideoPlayer';
import { RelatedVideoList } from './RelatedVideoList';
import {
  Container,
  FavButton,
  MainContainer,
  SidebarContainer,
  Subtitle,
  Title,
} from './styles';
import {
  addToFavorites,
  isFavorite,
  removeFromFavorites,
} from '../../services/favorites';
import { getVideoInfo } from '../../services/youtube';

export const Detail = ({ history }) => {
  const [favorite, setFavorite] = useState(false);
  const [videoInfo, setVideoInfo] = useState({});
  const { videoID } = useParams();

  useEffect(() => {
    getVideoInfo([videoID]).then((info) => {
      setVideoInfo(info[0]);
    });
    setFavorite(isFavorite(videoID));
  }, [videoID, history]);

  const onVideoChanged = (relatedVideoID) => {
    history.push(`/detail/${relatedVideoID}`);
  };

  const handleSetFav = () => {
    if (favorite) {
      removeFromFavorites(videoID);
    } else {
      addToFavorites(videoID);
    }
    setFavorite(!favorite);
  };

  return (
    <Container>
      <MainContainer>
        <VideoPlayer videoId={videoID} />
        <FavButton onClick={handleSetFav}>
          {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </FavButton>
        <Title>{videoInfo.title}</Title>
        <Subtitle>{videoInfo.description}</Subtitle>
      </MainContainer>
      <SidebarContainer>
        <RelatedVideoList relatedToVideoId={videoID} onVideoChanged={onVideoChanged} />
      </SidebarContainer>
    </Container>
  );
};
