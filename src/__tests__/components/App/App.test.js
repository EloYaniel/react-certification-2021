import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../../../components/App';
import { getYoutubeMainInfoList } from '../../../services/youtube';

jest.mock('../../../services/youtube');

describe('App Component tests suit', () => {
  it('Should match snapshot', async () => {
    getYoutubeMainInfoList.mockImplementation(() =>
      Promise.resolve([
        {
          id: '123',
          title: 'Wizeline Co.',
          description: 'Awesome Company',
          imageURL: 'http://wizeline.com',
        },
      ])
    );

    const element = render(<App />, { wrapper: MemoryRouter });

    await waitFor(() => {
      screen.getByText('Wizeline Co.');
      expect(element).toMatchSnapshot();
    });

    getYoutubeMainInfoList.mockRestore();
  });
});
