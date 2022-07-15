import React from 'react';
import { render, screen } from '@testing-library/react';
import LibraryModule from './LibraryModule';

describe('LibraryModule.jsx', () => {
  it('renders successfully', () => {
    render(<LibraryModule />);
    expect(screen.getByText(/LibraryModule/i)).toBeDefined();
  });
});
