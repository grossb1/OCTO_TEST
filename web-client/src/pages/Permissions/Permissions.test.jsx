import React from 'react';
import { render, screen } from '@testing-library/react';
import Permissions from './Permissions';

describe('Permissions.jsx', () => {
  it('renders successfully', () => {
    render(<Permissions />);
    expect(screen.getByText(/Permissions/i)).toBeDefined();
  });
});
