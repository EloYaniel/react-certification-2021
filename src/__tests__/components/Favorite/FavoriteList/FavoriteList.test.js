import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { FavoriteList } from '../../../../components/Favorite/FavoriteList';

describe('FavoriteList Component tests suit', () => {
  it('Should match snapshot', async () => {
    let element;
    act(() => {
      element = render(<FavoriteList />);
    });
    await waitFor(() => {
      screen.getByText('My favorites');

      expect(element).toMatchSnapshot();
    });
  });
});
