import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';
import userEvent from '@testing-library/user-event';

test('should', () => {
  const increment = jest.fn();
  render(<Button />);
  const countElement = screen.getByTestId('count');

  fireEvent.click(screen.getByRole('button'));

  expect(countElement.textContent).toBe('1');
  expect(increment).toHaveBeenCalled();
});
