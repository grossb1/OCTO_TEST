import React from 'react';
import { render, screen } from '@testing-library/react';
import Compare from './Compare';

describe('Compare.jsx', () => {
  it('renders successfully', () => {
    render(<Compare />);
    expect(screen.getByText(/Compare/i)).toBeDefined();
  });
});
