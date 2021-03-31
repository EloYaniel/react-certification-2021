import { fetchData } from '../fetch-data';

export const getYoutubeMainInfoList = async (search) => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&q=${encodeURI(
    search || 'Wizeline'
  )}&type=video&key=AIzaSyBYzWLlzPQfofKh32frvUh6oKJgB98ghis`;
  const response = await fetchData(url);
  const mainInfo = response.items.map((item) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    imageURL: item.snippet.thumbnails.high.url,
  }));

  return Promise.resolve(mainInfo);
};

export const getRelatedVideos = async (relatedToVideoId) => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&relatedToVideoId=${relatedToVideoId}&type=video&key=AIzaSyBYzWLlzPQfofKh32frvUh6oKJgB98ghis`;
  const response = await fetchData(url);

  const mainInfo = response.items.map((item) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    imageURL: item.snippet.thumbnails.default.url,
  }));

  return Promise.resolve(mainInfo);
};

export const getFavoriteVideos = async (videoIDs) => {
  let url =
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyBYzWLlzPQfofKh32frvUh6oKJgB98ghis';
  videoIDs.forEach((id) => {
    url = `${url}&id=${id}`;
  });
  const response = await fetchData(url);

  const mainInfo = response.items.map((item) => ({
    id: item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    imageURL: item.snippet.thumbnails.default.url,
  }));

  return Promise.resolve(mainInfo);
};

export const getVideoInfo = async (videoID) => {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyBYzWLlzPQfofKh32frvUh6oKJgB98ghis&id=${videoID}`;
  const response = await fetchData(url);

  const mainInfo = response.items.map((item) => ({
    id: item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    imageURL: item.snippet.thumbnails.default.url,
  }));

  return Promise.resolve(mainInfo);
};
