import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { CardInfo } from '../../../../../components/Favorite/FavoriteList/CardInfo';

describe('CardInfo Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<CardInfo />, { wrapper: MemoryRouter });
    expect(element).toMatchSnapshot();
  });
});
