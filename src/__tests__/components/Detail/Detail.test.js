import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Detail } from '../../../components/Detail';

describe('Detail Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<Detail />, { wrapper: MemoryRouter });
    expect(element).toMatchSnapshot();
  });
});
