import {
  getRelatedVideos,
  getVideoInfo,
  getYoutubeMainInfoList,
} from '../../services/youtube';
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

  it('#getYoutubeMainInfoList should query with "Wizeline" if not search is provided.', async () => {
    fetchData.mockImplementation(() => Promise.resolve(data));
    await getYoutubeMainInfoList();
    expect(fetchData).toHaveBeenCalledWith(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&q=Wizeline&type=video&key=AIzaSyBYzWLlzPQfofKh32frvUh6oKJgB98ghis'
    );
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

  it('#getVideoInfo should return a list of youtube ITEMS information', async () => {
    fetchData.mockImplementation(() =>
      Promise.resolve({
        items: [
          {
            id: 'aslkdj',
            snippet: {
              title: 'video 1',
              description: 'awesome video',
              thumbnails: {
                default: {
                  url: 'http://url',
                },
              },
            },
          },
        ],
      })
    );
    const info = await getVideoInfo(['abc']);

    const mockItem = info[0];
    expect(mockItem.id).toEqual('aslkdj');
    expect(mockItem.title).toEqual('video 1');
    expect(mockItem.description).toEqual('awesome video');
    expect(mockItem.imageURL).toEqual('http://url');
    fetchData.mockRestore();
  });

  it('#getVideoInfo should return a empty list if no videoIDs is provided', async () => {
    const info = await getVideoInfo([]);
    expect(info).toEqual([]);
    const empty = await getVideoInfo();
    expect(empty).toEqual([]);
    fetchData.mockRestore();
  });
});
