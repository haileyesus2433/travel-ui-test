
import { render, screen } from '@testing-library/react';
import EarnMore from '../EarnMore';

describe('EarnMore', () => {
  it('renders correctly', () => {
    render(<EarnMore />);
    
    expect(screen.getByText('Earn more money')).toBeInTheDocument();
    expect(screen.getByText('18:30 - 06:30')).toBeInTheDocument();
    expect(screen.getByText('DEPARTURE · Turkish Airline')).toBeInTheDocument();
    expect(screen.getByText('Official National Gallery Highlights Guided Tour')).toBeInTheDocument();
    expect(screen.getByText('Room two, 2 Twin Beds (Runway View, High Floor)')).toBeInTheDocument();
  });
});