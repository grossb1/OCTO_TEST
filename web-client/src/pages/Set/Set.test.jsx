import React from 'react';
import { render, screen } from '@testing-library/react';
import Set from './Set';

describe('Set.jsx', () => {
  it('renders successfully', () => {
    render(<Set />);
    expect(screen.getByText(/Set/i)).toBeDefined();
  });
});
