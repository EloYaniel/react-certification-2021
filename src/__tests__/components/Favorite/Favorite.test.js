import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Favorite } from '../../../components/Favorite';
import { Provider } from '../../../contexts';

describe('Favorite Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(
      <Provider>
        <Favorite />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(element).toMatchSnapshot();
  });
});
