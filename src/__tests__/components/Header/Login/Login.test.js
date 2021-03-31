import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Login } from '../../../../components/Header/Login';
import { Provider } from '../../../../contexts';

describe('Login Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(
      <Provider>
        <Login />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(element).toMatchSnapshot();
  });
});
