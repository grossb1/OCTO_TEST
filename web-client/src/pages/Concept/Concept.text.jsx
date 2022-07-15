import React from 'react';
import { render, screen } from '@testing-library/react';
import Concept from './Concept';

describe('About.jsx', () => {
  it('renders successfully', () => {
    render(<Concept />);
    expect(screen.getByText(/Concept/i)).toBeDefined();
  });
});
