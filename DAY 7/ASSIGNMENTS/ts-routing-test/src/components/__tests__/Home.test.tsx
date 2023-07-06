import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

test('renders home page content', () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Home />
        </MemoryRouter>
    );

    const homePageContent = screen.getByText(/This is the Home component/i);
    expect(homePageContent).toBeInTheDocument();
});