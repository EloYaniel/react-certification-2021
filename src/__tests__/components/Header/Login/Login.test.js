import React from 'react';
import { render } from '@testing-library/react';
import { Login } from '../../../../components/Header/Login';

describe('Login Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<Login />);
    expect(element).toMatchSnapshot();
  });
});
