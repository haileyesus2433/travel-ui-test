import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './Home';

jest.mock('../components/layout/Header', () => () => <div data-testid="mock-header" />);
jest.mock('../components/sections/FastestWay', () => () => <div data-testid="mock-fastest-way" />);
jest.mock('../components/sections/EverythingYouNeed', () => () => <div data-testid="mock-everything-you-need" />);
jest.mock('../components/sections/FocusOn', () => () => <div data-testid="mock-focus-on" />);
jest.mock('../components/sections/EarnMore', () => () => <div data-testid="mock-earn-more" />);
jest.mock('../components/sections/CustomizeContent', () => () => <div data-testid="mock-customize-content" />);
jest.mock('../components/layout/Footer', () => () => <div data-testid="mock-footer" />);

describe('Home', () => {
  it('renders all sections correctly', () => {
    render(<Home />);
    
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-fastest-way')).toBeInTheDocument();
    expect(screen.getByTestId('mock-everything-you-need')).toBeInTheDocument();
    expect(screen.getByTestId('mock-customize-content')).toBeInTheDocument();
    expect(screen.getByTestId('mock-focus-on')).toBeInTheDocument();
    expect(screen.getByTestId('mock-earn-more')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });
});