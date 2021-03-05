import { fetchData } from '../fetch-data';

export const getYoutubeMainInfoList = async (search = 'Wizeline') => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&q=${encodeURI(
    search
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
