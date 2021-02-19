import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../../../components/Header';

describe('Header Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<Header />);
    expect(element).toMatchSnapshot();
  });
});
