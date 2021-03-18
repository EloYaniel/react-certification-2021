import React from 'react';
import { act, render, screen, waitFor, fireEvent } from '@testing-library/react';
import { RelatedVideoList } from '../../../../components/Detail/RelatedVideoList';
import { getRelatedVideos } from '../../../../services/youtube';

jest.mock('../../../../services/youtube');

describe('RelatedVideoList Component tests suit', () => {
  it('Should match snapshot', async () => {
    const onVideoChangedMock = jest.fn();
    getRelatedVideos.mockImplementation(() =>
      Promise.resolve([
        {
          id: '123',
          title: 'Wizeline Co.',
          description: 'Awesome Company',
          imageURL: 'http://wizeline.com',
        },
      ])
    );

    let element;
    act(() => {
      element = render(
        <RelatedVideoList onVideoChanged={onVideoChangedMock} relatedToVideoId="abcde" />
      );
    });

    await waitFor(() => {
      screen.getByText('Wizeline Co.');

      expect(element).toMatchSnapshot();
    });
    getRelatedVideos.mockRestore();
  });

  it('shoud call passed function', async () => {
    const onVideoChangedMock = jest.fn();

    getRelatedVideos.mockImplementation(() =>
      Promise.resolve([
        {
          id: '123',
          title: 'Wizeline Co.',
          description: 'Awesome Company',
          imageURL: 'http://wizeline.com',
        },
      ])
    );

    let element;
    act(() => {
      element = render(
        <RelatedVideoList onVideoChanged={onVideoChangedMock} relatedToVideoId="abcde" />
      );
    });

    await waitFor(() => {
      screen.getByText('Wizeline Co.');
      const el = element.container.querySelector('div');
      fireEvent.click(el);
      expect(getRelatedVideos).toBeCalledWith('abcde');
      expect(onVideoChangedMock).toHaveBeenCalledTimes(1);
    });
    getRelatedVideos.mockRestore();
  });
});
