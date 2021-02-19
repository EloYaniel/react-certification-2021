import React from 'react';
import { render } from '@testing-library/react';
import { Menu } from '../../../../components/Header/Menu';

describe('Menu Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<Menu />);
    expect(element).toMatchSnapshot();
  });
});
