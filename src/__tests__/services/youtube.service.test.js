import { getYoutubeMainInfoList } from '../../services/youtube';
import * as data from '../../utils/youtube-videos-mock.json';

describe('Youtbe Service tests suit', () => {
  it('Should return a list of youtube ITEMS information', async () => {
    const info = await getYoutubeMainInfoList();

    info.forEach((el, i) => {
      const mockItem = data.items[i];
      expect(el.id).toEqual(mockItem.etag);
      expect(el.title).toEqual(mockItem.snippet.title);
      expect(el.description).toEqual(mockItem.snippet.description);
      expect(el.imageURL).toEqual(mockItem.snippet.thumbnails.default.url);
    });
  });
});
