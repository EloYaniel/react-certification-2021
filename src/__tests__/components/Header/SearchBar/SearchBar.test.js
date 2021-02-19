import React from 'react';
import { render } from '@testing-library/react';
import { SearchBar } from '../../../../components/Header/SearchBar';

describe('SearchBar Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<SearchBar />);
    expect(element).toMatchSnapshot();
  });
});
