import { getRelatedVideos, getYoutubeMainInfoList } from '../../services/youtube';
import * as data from './youtube-videos-mock.json';
import { fetchData } from '../../services/fetch-data';

jest.mock('../../services/fetch-data');

describe('Youtbe Service tests suit', () => {
  it('#getYoutubeMainInfoList should return a list of youtube ITEMS information', async () => {
    fetchData.mockImplementation(() => Promise.resolve(data));
    const info = await getYoutubeMainInfoList('some search');

    info.forEach((el, i) => {
      const mockItem = data.items[i];
      expect(el.id).toEqual(mockItem.id.videoId);
      expect(el.title).toEqual(mockItem.snippet.title);
      expect(el.description).toEqual(mockItem.snippet.description);
      expect(el.imageURL).toEqual(mockItem.snippet.thumbnails.high.url);
    });
    fetchData.mockRestore();
  });

  it('#getRelatedVideos should return a list of youtube ITEMS information', async () => {
    fetchData.mockImplementation(() => Promise.resolve(data));
    const info = await getRelatedVideos('abc');

    info.forEach((el, i) => {
      const mockItem = data.items[i];
      expect(el.id).toEqual(mockItem.id.videoId);
      expect(el.title).toEqual(mockItem.snippet.title);
      expect(el.description).toEqual(mockItem.snippet.description);
      expect(el.imageURL).toEqual(mockItem.snippet.thumbnails.default.url);
    });
    fetchData.mockRestore();
  });
});
