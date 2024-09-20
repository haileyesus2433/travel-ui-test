import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

jest.mock('../../sections/Hero', () => () => <div data-testid="mock-hero" />);

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />);
    
    expect(screen.getByText('Start selling travel today on your own website')).toBeInTheDocument();
    expect(screen.getByText('Customize your travel website, and start selling. Let\'s get your business off the ground with our intuitive tools!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Try it now' })).toBeInTheDocument();
    expect(screen.getByTestId('mock-hero')).toBeInTheDocument();
  });
});