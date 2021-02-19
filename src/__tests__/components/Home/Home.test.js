import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Home } from '../../../components/Home';
import { getYoutubeMainInfoList } from '../../../services/youtube';

jest.mock('../../../services/youtube');

describe('Home Component tests suit', () => {
  it('Should match snapshot', async () => {
    getYoutubeMainInfoList.mockImplementation(() =>
      Promise.resolve([
        {
          id: '123',
          title: 'Wizeline Co.',
          description: 'Awesome Compnay',
          imageURL: 'http://wizeline.com',
        },
      ])
    );
    const element = render(<Home />);

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
          description: 'Awesome Compnay',
          imageURL: 'http://wizeline.com',
        },
      ])
    );
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText('Welcome to my first challenge!!!')).toBeInTheDocument();
    });

    getYoutubeMainInfoList.mockRestore();
  });
});
