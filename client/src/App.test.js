import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('displays dark mode button', () => {
  const { getByTestId } = render(<App />);
  getByTestId('toggleDarkMode');
});

test(`display Women's World Cup`, () => {
  const { getByText } = render(<App />);
  getByText(/women's world cup/i);
});

test('button is clickable', () =>{
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('toggleDarkMode'), {button: 0});
})