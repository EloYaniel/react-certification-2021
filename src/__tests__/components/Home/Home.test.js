import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
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
    const viwMoreFnMock = jest.fn();
    const element = render(
      <Provider>
        <Home handleViewMore={viwMoreFnMock} />
      </Provider>
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
    const viwMoreFnMock = jest.fn();
    render(
      <Provider>
        <Home handleViewMore={viwMoreFnMock} />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Welcome to my challenges!!!')).toBeInTheDocument();
    });

    getYoutubeMainInfoList.mockRestore();
  });

  it('Should call passed function', async () => {
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
    const viwMoreFnMock = jest.fn();
    render(
      <Provider>
        <Home handleViewMore={viwMoreFnMock} />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Welcome to my challenges!!!')).toBeInTheDocument();
      fireEvent.click(screen.getByText('View More'));

      expect(viwMoreFnMock.mock.calls.length).toBe(1);
    });

    getYoutubeMainInfoList.mockRestore();
  });
});
