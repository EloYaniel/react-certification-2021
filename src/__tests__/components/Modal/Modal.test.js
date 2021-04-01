import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Modal } from '../../../components/Modal';

describe('Modal Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<Modal />, { wrapper: MemoryRouter });
    expect(element).toMatchSnapshot();
  });
});
