import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  addToFavorites,
  isFavorite,
  removeFromFavorites,
} from '../../../services/favorites';
import { getVideoInfo } from '../../../services/youtube';
import { VideoPlayer } from '../../Shared/VideoPlayer';
import { RelatedFavoriteVideoList } from '../RelatedVideoList';
import {
  Container,
  FavButton,
  MainContainer,
  Subtitle,
  SidebarContainer,
  Title,
} from './styles';

export const FavoriteDetail = ({ history }) => {
  const [favorite, setFavorite] = useState(false);
  const [videoInfo, setVideoInfo] = useState({});
  const { videoID } = useParams();

  useEffect(() => {
    getVideoInfo(videoID).then((info) => {
      setVideoInfo(info[0]);
    });
    setFavorite(isFavorite(videoID));

    if (!isFavorite(videoID)) {
      history.push('/page-not-found');
    }
  }, [history, videoID]);

  const onVideoChanged = (relatedVideoID) => {
    history.push(`/favorites/${relatedVideoID}`);
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
        {videoInfo && (
          <>
            <Title>{videoInfo.title}</Title>
            <Subtitle>{videoInfo.description}</Subtitle>
          </>
        )}
      </MainContainer>
      <SidebarContainer>
        <RelatedFavoriteVideoList
          relatedToVideoId={videoID}
          onVideoChanged={onVideoChanged}
        />
      </SidebarContainer>
    </Container>
  );
};
