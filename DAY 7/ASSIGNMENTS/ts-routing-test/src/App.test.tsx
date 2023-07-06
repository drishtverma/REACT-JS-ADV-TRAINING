import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('full app rendering/navigating', async() => {
  render(<App />, {wrapper: BrowserRouter})

  // verify page content for default route
  expect(screen.getByText(/This is the Home component/i)).toBeInTheDocument()

  // verify page content for expected route after navigating
  await userEvent.click(screen.getByText(/About/i))
  expect(screen.getByText(/This is the About component/i)).toBeInTheDocument()

});
