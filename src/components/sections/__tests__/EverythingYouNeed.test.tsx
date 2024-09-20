import React from 'react';
import { render, screen } from '@testing-library/react';
import EverythingYouNeed from '../EverythingYouNeed';

describe('EverythingYouNeed', () => {
  it('renders correctly', () => {
    render(<EverythingYouNeed />);
    
    expect(screen.getByText('Everything you need, in one link.')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Book')).toBeInTheDocument();
    expect(screen.getByText('Ancillaries')).toBeInTheDocument();
    expect(screen.getByText('Payments')).toBeInTheDocument();
    expect(screen.getByText('Order Management')).toBeInTheDocument();
  });
});