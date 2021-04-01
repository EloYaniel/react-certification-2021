import React from 'react';
import { render } from '@testing-library/react';
import { NotFound } from '../../../components/NotFound';

describe('NotFound Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<NotFound />);
    expect(element).toMatchSnapshot();
  });
});
