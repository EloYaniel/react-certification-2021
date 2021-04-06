import React from 'react';
import { VideoContainer } from './styles';

export const VideoPlayer = ({ videoId }) => (
  <VideoContainer src={`https://www.youtube-nocookie.com/embed/${videoId}`} />
);
