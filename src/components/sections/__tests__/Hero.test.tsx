import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

jest.mock('../../ui/flight-search', () => () => <div data-testid="mock-flight-search" />);

describe('Hero', () => {
  it('renders correctly', () => {
    render(<Hero />);
    
    expect(screen.getByText('Company Logo')).toBeInTheDocument();
    expect(screen.getByText('Flight')).toBeInTheDocument();
    expect(screen.getByText('Stays')).toBeInTheDocument();
    expect(screen.getByText('Tours')).toBeInTheDocument();
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('My Account')).toBeInTheDocument();
    expect(screen.getByAltText('A beautiful black women holding a camera')).toBeInTheDocument();
    expect(screen.getByText('Hello There,')).toBeInTheDocument();
    expect(screen.getByText('Explore the Unseen, Experience the Unforgettable')).toBeInTheDocument();
    expect(screen.getByTestId('mock-flight-search')).toBeInTheDocument();
  });
});