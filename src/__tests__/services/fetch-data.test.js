import { fetchData } from '../../services/fetch-data';

describe('FetchData service tests suit', () => {
  it('should return a value', async () => {
    const fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ prop1: { prop2: 1.42 } }),
      })
    );

    const response = await fetchData('http://example.com');
    expect(response).toMatchObject({ prop1: { prop2: 1.42 } });
    expect(fetchSpy).toHaveBeenCalledWith('http://example.com', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
});
