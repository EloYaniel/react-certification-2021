import * as mockData from '../../utils/youtube-videos-mock.json';

export const getYoutubeMainInfoList = () => {
  const mainInfo = mockData.items.map((item) => ({
    id: item.etag,
    title: item.snippet.title,
    description: item.snippet.description,
    imageURL: item.snippet.thumbnails.default.url,
  }));

  return Promise.resolve(mainInfo);
};
