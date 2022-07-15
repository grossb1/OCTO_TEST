import React from 'react';
import { render, screen } from '@testing-library/react';
import UserGuide from './UserGuide';

describe('UserGuide.jsx', () => {
  it('renders successfully', () => {
    render(<UserGuide />);
    expect(screen.getByText(/UserGuide/i)).toBeDefined();
  });
});
