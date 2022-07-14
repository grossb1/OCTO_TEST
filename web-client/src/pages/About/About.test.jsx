import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About.jsx', () => {
  it('renders successfully', () => {
    render(<About />);
    expect(screen.getByText(/About/i)).toBeDefined();
  });
});
