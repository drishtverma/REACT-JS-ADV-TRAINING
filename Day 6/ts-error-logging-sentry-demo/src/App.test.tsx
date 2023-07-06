import { render } from '@testing-library/react';
import App from './App';

test('simple counter app visibitity testing', () => {
  //Arrange
  render(<App />);

  //Act
  // const displayElement = screen.getByText(/Simple Counter/i);
  // const counterElement = screen.getByTestId(/counter/);
  // const incrementButton = screen.getByTestId(/increment/);

  //Assertion
  // expect(displayElement).toBeInTheDocument();
  // expect(counterElement).toBeInTheDocument();
  // expect(incrementButton).toBeInTheDocument();
});
