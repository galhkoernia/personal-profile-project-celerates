/*
 * File  : App.test.js
 * Created on Tue Oct 26 2025
 * Author: Galuh Kurnia
 * Copyright (c) 2025 Your Company
 */


import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
