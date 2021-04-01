import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Auth } from '../../../components/Auth';
import { Provider } from '../../../contexts';
import { login } from '../../../services/auth';

jest.mock('../../../services/auth');

describe('Auth Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(
      <Provider>
        <Auth />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(element).toMatchSnapshot();
  });

  it('Should login when click Login button', () => {
    login.mockImplementation(() => Promise.resolve({}));

    render(
      <Provider>
        <Auth />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    const btn = screen.getByText('Login');
    fireEvent.click(btn);

    expect(login).toBeCalledTimes(1);
  });

  it('Should set Error message when #login fails', async () => {
    login.mockImplementation(() => Promise.reject(new Error('Login Error')));
    act(() => {
      render(
        <Provider>
          <Auth />
        </Provider>,
        { wrapper: MemoryRouter }
      );
    });
    const btn = screen.getByText('Login');
    fireEvent.click(btn);
    await waitFor(() => {
      const errorMessage = screen.getByText('Wrong Username or Password.');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
