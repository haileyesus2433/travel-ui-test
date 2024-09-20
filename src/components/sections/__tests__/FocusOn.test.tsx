import React from 'react';
import { render, screen } from '@testing-library/react';
import FocusOn from '../FocusOn';

jest.mock('recharts', () => ({
  BarChart: () => <div data-testid="mock-bar-chart" />,
  Bar: () => <div />,
  XAxis: () => <div />,
  YAxis: () => <div />,
  Tooltip: () => <div />,
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('FocusOn', () => {
  it('renders correctly', () => {
    render(<FocusOn />);
    
    expect(screen.getByText('Focus on what matters')).toBeInTheDocument();
    expect(screen.getByText(/We take care of the intricate details/)).toBeInTheDocument();
    expect(screen.getByTestId('mock-bar-chart')).toBeInTheDocument();
  });
});