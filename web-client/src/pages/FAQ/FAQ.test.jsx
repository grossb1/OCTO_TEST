import React from 'react';
import { render, screen } from '@testing-library/react';
import FAQ from './FAQ';

describe('FAQ.jsx', () => {
  it('renders successfully', () => {
    render(<FAQ />);
    expect(screen.getByText(/FAQ/i)).toBeDefined();
  });
});
