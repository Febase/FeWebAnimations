import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

it('<App /> render', () => {
  render(<App />);
  expect(screen.getByText(0)).toBeDefined();
});
