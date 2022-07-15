import React from 'react';
import { render, screen } from '@testing-library/react';
import CodeSet from './CodeSet';

describe('CodeSet.jsx', () => {
  it('renders successfully', () => {
    render(<CodeSet />);
    expect(screen.getByText(/CodeSet/i)).toBeDefined();
  });
});
