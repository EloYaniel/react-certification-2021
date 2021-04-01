import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { FavoriteDetail } from '../../../../components/Favorite/FavoriteDetail';

describe('FavoriteDetail Component tests suit', () => {
  const history = createMemoryHistory();
  history.push('/favorites/abcde');
  it('Should match snapshot', () => {
    const element = render(
      <Router history={history}>
        <FavoriteDetail history={history} />
      </Router>
    );
    expect(element).toMatchSnapshot();
  });
});
