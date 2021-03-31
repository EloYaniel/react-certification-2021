import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Home } from '../../../components/Home';
import { getYoutubeMainInfoList } from '../../../services/youtube';
import { Provider } from '../../../contexts';

jest.mock('../../../services/youtube');

describe('Home Component tests suit', () => {
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
    const element = render(
      <Provider>
        <Home />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    await waitFor(() => {
      screen.getByText('Wizeline Co.');

      expect(getYoutubeMainInfoList).toHaveBeenCalledTimes(1);
      expect(element).toMatchSnapshot();
    });

    getYoutubeMainInfoList.mockRestore();
  });

  it('Should render Home title', async () => {
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
    render(
      <Provider>
        <Home />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    await waitFor(() => {
      expect(screen.getByText('Welcome to my challenges!!!')).toBeInTheDocument();
    });

    getYoutubeMainInfoList.mockRestore();
  });
});
