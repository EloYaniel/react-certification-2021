import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Menu } from '../../../../components/Header/Menu';
import { Provider } from '../../../../contexts';

describe('Menu Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(
      <Provider>
        <Menu />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(element).toMatchSnapshot();
  });
});
