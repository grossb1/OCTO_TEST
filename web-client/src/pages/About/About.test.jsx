import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About.jsx', () => {
  it('renders successfully', () => {
    render(<About />);
    expect(screen.getByText(/About/i)).toBeDefined();
  });
});
