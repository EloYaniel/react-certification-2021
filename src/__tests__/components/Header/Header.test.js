import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../../../components/Header';
import { Provider } from '../../../contexts';

describe('Header Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(
      <Provider>
        <Header />
      </Provider>
    );
    expect(element).toMatchSnapshot();
  });
});
