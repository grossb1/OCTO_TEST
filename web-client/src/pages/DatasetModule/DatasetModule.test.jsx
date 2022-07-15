import React from 'react';
import { render, screen } from '@testing-library/react';
import DatasetModule from './DatasetModule';

describe('DatasetModule.jsx', () => {
  it('renders successfully', () => {
    render(<DatasetModule />);
    expect(screen.getByText(/DatasetModule/i)).toBeDefined();
  });
});
