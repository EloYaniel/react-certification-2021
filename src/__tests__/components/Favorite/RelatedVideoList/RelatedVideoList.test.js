import React from 'react';
import { act, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { RelatedFavoriteVideoList } from '../../../../components/Favorite/RelatedVideoList';

describe('RelatedFavoriteVideoList Component tests suit', () => {
  it('Should match snapshot', async () => {
    const onVideoChangedMock = jest.fn();
    let element;
    act(() => {
      element = render(
        <RelatedFavoriteVideoList
          onVideoChanged={onVideoChangedMock}
          relatedToVideoId="abcde"
        />,
        { wrapper: MemoryRouter }
      );
    });

    await waitFor(() => {
      // screen.getByText('Wizeline Co.');

      expect(element).toMatchSnapshot();
    });
  });
});
