import React from 'react';
import { render } from '@testing-library/react';
import { ThemeToggle } from '../../../../components/Header/ThemeToggle';

describe('ThemeToggle Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<ThemeToggle />);
    expect(element).toMatchSnapshot();
  });
});
