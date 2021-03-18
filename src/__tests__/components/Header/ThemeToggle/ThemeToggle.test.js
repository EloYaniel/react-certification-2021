import React from 'react';
import { render } from '@testing-library/react';
import { ThemeToggle } from '../../../../components/Header/ThemeToggle';
import { Provider } from '../../../../contexts';

describe('ThemeToggle Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(
      <Provider>
        <ThemeToggle />
      </Provider>
    );
    expect(element).toMatchSnapshot();
  });
});
