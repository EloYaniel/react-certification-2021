import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Detail } from '../../../components/Detail';
import { addToFavorites, removeFromFavorites } from '../../../services/favorites';

jest.mock('../../../services/favorites');

describe('Detail Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<Detail />, { wrapper: MemoryRouter });
    expect(element).toMatchSnapshot();
  });

  it('should add from favorites when click Add to favorites', () => {
    const history = createMemoryHistory();
    history.push('/favorites/abcde');
    addToFavorites.mockImplementation(() => []);

    render(
      <Router history={history}>
        <Detail history={history} />
      </Router>
    );
    const btn = screen.getByText('Add to Favorites');
    fireEvent.click(btn);

    expect(addToFavorites).toHaveBeenCalledTimes(1);
  });

  it('should remove from favorites when click REmove from favorites', () => {
    const history = createMemoryHistory();
    history.push('/favorites/abcde');
    addToFavorites.mockImplementation(() => []);
    removeFromFavorites.mockImplementation(() => {});

    render(
      <Router history={history}>
        <Detail history={history} />
      </Router>
    );
    let btn = screen.getByText('Add to Favorites');
    fireEvent.click(btn);
    btn = screen.getByText('Remove from Favorites');
    fireEvent.click(btn);
    expect(removeFromFavorites).toHaveBeenCalledTimes(1);
  });
});
