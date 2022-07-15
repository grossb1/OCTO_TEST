import React from 'react';
import { render, screen } from '@testing-library/react';
import ValueSet from './ValueSet';

describe('ValueSet.jsx', () => {
  it('renders successfully', () => {
    render(<ValueSet />);
    expect(screen.getByText(/ValueSet/i)).toBeDefined();
  });
});
