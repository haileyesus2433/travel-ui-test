import React from 'react';
import { render, screen } from '@testing-library/react';
import FastestWay from '../FastestWay';

describe('FastestWay', () => {
  it('renders correctly', () => {
    render(<FastestWay />);
    
    expect(screen.getByText('The fastest way to sell travel')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
    expect(screen.getByText('Customize')).toBeInTheDocument();
    expect(screen.getByText('Start selling')).toBeInTheDocument();
  });
});