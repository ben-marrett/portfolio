import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contact form with required fields', () => {
  render(<App />);
  expect(screen.getByLabelText(/name/i)).toBeRequired();
  expect(screen.getByLabelText(/email/i)).toBeRequired();
  expect(screen.getByLabelText(/message/i)).toBeRequired();
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
});

test('renders contact details', () => {
  render(<App />);
  expect(screen.getByText(/benteiko@gmail.com/)).toBeInTheDocument();
  expect(screen.getByText(/github\.com\/ben-marrett/)).toBeInTheDocument();
  expect(screen.getByText(/linkedin\.com\/in\/ben-teiko-marrett/)).toBeInTheDocument();
});

test('Get in Touch button links to contact section', () => {
  render(<App />);
  const ctaLink = screen.getByText(/get in touch/i);
  expect(ctaLink).toHaveAttribute('href', '#contact');
});
