import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../../../../components/Header/SearchBar';
import { Provider } from '../../../../contexts';

describe('SearchBar Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<SearchBar />);
    expect(element).toMatchSnapshot();
  });

  it('should handle search input', async () => {
    render(
      <Provider>
        <SearchBar />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Wizeline'), {
      target: { value: 'Searching in Wizeline' },
    });

    expect(screen.getByDisplayValue('Searching in Wizeline')).toBeInTheDocument();
  });
});
