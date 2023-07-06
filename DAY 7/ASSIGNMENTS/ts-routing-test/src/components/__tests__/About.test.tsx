import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../About';

test('renders home page content', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <About />
    </MemoryRouter>
  );

  const aboutPageContent = screen.getByText(/This is the About component/i);
  expect(aboutPageContent).toBeInTheDocument();
});
