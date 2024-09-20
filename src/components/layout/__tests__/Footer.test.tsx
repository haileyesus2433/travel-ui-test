
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer />);
    
    expect(screen.getByText('Get your website today!')).toBeInTheDocument();
    expect(screen.getByText('Sell flights, hotels, and tours from about the world.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '02839082932' })).toBeInTheDocument();
    expect(screen.getByText('hello@test.com')).toBeInTheDocument();
  });
});