import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardInfo } from '../../../../components/Home/CardInfo';

describe('CardInfo Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(
      <CardInfo
        description="wizeline is awesome."
        imageURL="http://wizeline.com"
        title="Wizeline Company"
      />
    );
    expect(element).toMatchSnapshot();
  });

  it('Should render props correctly', () => {
    render(
      <CardInfo
        description="wizeline is awesome."
        imageURL="http://wizeline.com"
        title="Wizeline Company"
      />
    );
    const imgElement = screen.getByRole('img');

    expect(imgElement.src).toEqual('http://wizeline.com/');
    expect(imgElement.alt).toEqual('Wizeline Company');
    expect(screen.getByText('wizeline is awesome.')).toBeInTheDocument();
    expect(screen.getByText('Wizeline Company')).toBeInTheDocument();
  });
});
