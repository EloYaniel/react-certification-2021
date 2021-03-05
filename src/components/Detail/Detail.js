import React from 'react';
import { VideoPlayer } from './VideoPlayer';
import { RelatedVideoList } from './RelatedVideoList';
import { BackButton } from './styles';

export const Detail = ({ handleGoBack, videoId, onVideoChanged }) => {
  return (
    <>
      <BackButton type="button" onClick={handleGoBack}>
        Go back
      </BackButton>
      <VideoPlayer videoId={videoId} />
      <RelatedVideoList relatedToVideoId={videoId} onVideoChanged={onVideoChanged} />
    </>
  );
};
