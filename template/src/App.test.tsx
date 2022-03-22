import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CRA TEMPLATE STARTER KIT', () => {
  render(<App />);
  const linkElement = screen.getByText(/CRA TEMPLATE STARTER KIT/i);
  expect(linkElement).toBeInTheDocument();
});
