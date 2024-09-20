import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomizeContent from '../CustomizeContent';

describe('CustomizeContent', () => {
  it('renders correctly', () => {
    render(<CustomizeContent />);
    
    expect(screen.getByText('An Easy to Use Travel Booking Platform')).toBeInTheDocument();
    expect(screen.getByText('Customize every content on your website')).toBeInTheDocument();
    expect(screen.getByText('Offer your customer a seamless travel booking experience, customised to your brand.')).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getAllByText('Flight').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Stays').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Tours').length).toBeGreaterThan(0);
  });
});