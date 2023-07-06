import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import { Login } from '../Login';
import userEvent from '@testing-library/user-event';
import  {act}  from 'react-test-renderer';

test('simple counter app visibitity testing', () => {
  //Arrange
  render(<Login />);

  //Act
  const email = screen.getByPlaceholderText('email');
  const password = screen.getByPlaceholderText('password');
  const buttonSignin = screen.getByTestId(/signin/);
  const buttonSignup = screen.getByTestId(/signup/);

  //Assertion
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(buttonSignin).toBeInTheDocument();
  expect(buttonSignup).toBeInTheDocument();
});

test('Button should be click and call handleSignIn function', async() => {
 global.alert = jest.fn;
  render(<Login />);

  const buttonSignin = screen.getByTestId(/signin/);  
  //await(userEvent.click(buttonSignin))

 // const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
  
  fireEvent.click(buttonSignin)
  expect(buttonSignin).toHaveBeenCalled()

});

test('Button should have name', () => {
  render(<Login />);
  const buttonSignin = screen.getByTestId(/signin/);
  const buttonSignup = screen.getByTestId(/signup/);

  expect(buttonSignin).toHaveTextContent('Sign In');
  expect(buttonSignup).toHaveTextContent('Sign Up');
});
