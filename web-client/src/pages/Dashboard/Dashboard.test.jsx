import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard.jsx', () => {
  it('renders successfully', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Dashboard/i)).toBeDefined();
  });
});
