import React from 'react';
import { render } from '@testing-library/react';
import { Detail } from '../../../components/Detail';

describe('Detail Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<Detail />);
    expect(element).toMatchSnapshot();
  });
});
